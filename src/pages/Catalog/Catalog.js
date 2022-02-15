import React, {useEffect, useState} from "react";
import "./Catalog.scss";
import {Filters} from "../../components/Main/Filters";
import {Item} from "../../components/Main/Item";
import {CircularProgress, Box} from '@mui/material';
import {Typography} from "@mui/material";

export function Catalog() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("initial");

  useEffect(() => {
    setData(null);
    setError(null);
    setStatus("loading");

    fetch("https://61f5558a62f1e300173c40f3.mockapi.io/products")
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Sorry, but response status is ${response.status}, try again) `);
        } else {
          return response.json();
        }
      })
      .then(dataJSON => {
        setData(dataJSON);
        setError(null);
        setStatus("success")
      })
      .catch((err) => {
        setData(null);
        setError(err.message);
        setStatus("error");
      });
  }, []);

  return <main className="catalog">

    <Filters/>

    {status === "initial" || status === "loading" ? (
      <Box sx={{display: 'flex', paddingTop: "25vh"}}>
        <CircularProgress sx={{margin: '0 auto', color: 'green'}}/>
      </Box>
    ) : status !== "success" ? (
      <Typography className="catalog__error" variant="h3" component="h3">
        {error}
      </Typography>
    ) : (
      <div className="catalog__list">
        {data.map((product) => {
          return <Item key={product.id} product={product}/>
        })
        }
      </div>
    )}

  </main>
}