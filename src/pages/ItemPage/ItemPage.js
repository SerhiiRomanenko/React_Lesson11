import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useNavigate} from 'react-router-dom';
import "./ItemPage.scss";
import {Badge, Box, Button, CardMedia, CircularProgress, Rating, Typography} from "@mui/material";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function ItemPage() {

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("initial");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const params = useParams();
  const idParams = parseInt(params.id, 10);
  const isRightId = !Number.isNaN(idParams);

  useEffect(() => {
    if (!isRightId === true || isRightId === true) {
      setProduct(null);
      setError(null);
      setStatus("loading");
      fetch(`https://61f5558a62f1e300173c40f3.mockapi.io/products/${params.id}`)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(`Response status is ${res.status}`);
          } else {
            return res.json();
          }
        })
        .then((JSON) => {
          setProduct(JSON);
          setError(null);
          setStatus("success");
        })
        .catch((err) => {
          setProduct(null);
          setError(err.message);
          setStatus("error");
        });
    }
  }, [params])
  return <main className="itemPage">

    {status === "initial" || status === "loading" ? (
      <Box sx={{display: 'flex', paddingTop: "25vh"}}>
        <CircularProgress sx={{margin: '0 auto', color: 'green'}}/>
      </Box>
    ) : status === "success" ? (
      <>
        {product.isSale === true &&
          <Badge className="itemPage__isSale" badgeContent={"Роспродаж"}
                 color="primary"> </Badge>
        }
        {product.isNew === true &&
          <FiberNewIcon className="itemPage__isNew" sx={{color: "red"}}/>
        }
        <Typography className="itemPage__title" gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <CardMedia
          className="itemPage__image"
          component="img"
          height="300"
          image={product.photo + `?v=${product.id}`}
          alt={product.title}
        />
        <Typography className="itemPage__description" variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography className="itemPage__price" variant="body2" color="text.secondary">
          <b>{product.price + " USD"}</b>
        </Typography>
        <Rating className="itemPage__rating" name="half-rating" defaultValue={Math.ceil(product.rating / 20)}
                precision={0.5}/><br/>
        <Button className="itemPage__addToCard" variant="contained" size="small"
                sx={{
                  margin: "0 auto",
                  color: 'white',
                  position: 'relative',
                  paddingRight: "27px",
                  marginRight: "50px",
                }}>
          <span>B корзину</span>
          <ShoppingCartIcon className="itemPage__addToCardIcon"
                            sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
        </Button>


        <Button className="itemPage__goBack"
                variant="contained"
                size="small" onClick={() => navigate(-1)}
                sx={{margin: "0 auto", color: 'white', position: 'relative', paddingRight: "27px"}}>
          <span>Назад</span>
          <ArrowBackIosIcon className="itemPage__goBackIcon"
                            sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
        </Button>
      </>
    ) : (
      <Typography className="itemPage__error" variant="h3" component="h3">
        {error}
      </Typography>
    )}


  </main>
}