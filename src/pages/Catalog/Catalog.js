import React, {useEffect, useState} from "react";
import "./Catalog.scss";
import {
  CircularProgress,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Rating,
  Badge
} from '@mui/material';
import FiberNewIcon from '@mui/icons-material/FiberNew';

export function Catalog() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("initial");

  useEffect(() => {
    fetch("https://61f5558a62f1e300173c40f3.mockapi.io/products")
      .then(response => {
        setData(null);
        setError(null);
        setStatus("loading");
        return response.json();
      })
      .then(date => {
        setData(date);
        setError(null);
        setStatus("success")
      })
      .catch((err) => {
        setData(null);
        setError(err);
        setStatus("error");
      });
  }, []);
  console.log(data)

  return <main className="catalog">
    {status === "initial" || status === 'loading' ?
      <Box sx={{display: 'flex', paddingTop: "25vh"}}>
        <CircularProgress sx={{margin: '0 auto', color: 'green'}}/>
      </Box>
      :
      <div className="catalog__list">
        {data.map((product) => {
          return <Card className="product" key={product.id} sx={{maxWidth: 300, margin: "0 auto", textAlign: "center"}}>
            <CardMedia
              component="img"
              height="140"
              image={product.photo + `?v=${product.id}`}
              alt={product.title}
            />
            <CardContent>
              <Typography className="product__title" gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography className="product__description" variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography className="product__price" variant="body2" color="text.secondary">
                <b>{product.price + " USD"}</b>
              </Typography>
              <Rating className="product__rating" name="half-rating" defaultValue={Math.ceil(product.rating / 20)}
                      precision={0.5}/><br/>
              {product.isNew === true && <FiberNewIcon sx={{color: "red"}}/>}
            </CardContent>
            <CardActions>
              <Button size="small" sx={{margin: "0 auto"}}>В корзину</Button>
            </CardActions>
          </Card>

        })
        }
      </div>
    }
  </main>
}