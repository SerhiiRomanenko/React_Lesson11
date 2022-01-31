import React, {useEffect, useState} from "react";
import "./Catalog.scss";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <Box sx={{display: 'flex'}}>
        <CircularProgress sx={{margin: '0 auto', color: 'green'}}/>
      </Box>
      :
      <div className="catalog__list">
        {data.map((product) => {
          return <Card className="product" key={product.id} sx={{maxWidth: 345}}>
            <CardMedia
              component="img"
              height="140"
              image={product.photo}
              alt={product.title}
            />
            <CardContent>
              <Typography className="product__title" gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography className="product__description" variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>


          // <div className="catalog__item" key={product.id}>
          //   <h2>{product.title}</h2>
          //   <p>{product.price}</p>
          //   <p>{product.description}</p>
          //   <p>{product.rating}</p>
          //   <p>{product.photo}</p>
          // </div>
        })
        }
      </div>
    }
  </main>
}