import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Badge
} from "@mui/material";
import {Link} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import FiberNewIcon from "@mui/icons-material/FiberNew";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./Item.scss";

export function Item({product}) {

  return <Card className="product"
               sx={{maxWidth: 300, margin: "0 auto", textAlign: "center", position: 'relative'}} onClick={console.log}>
    <CardMedia
      className="product__image"
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
      {product.isNew === true &&
        <FiberNewIcon className="product__isNew" sx={{color: "red"}}/>
      }
      {product.isSale === true &&
        <Badge className="product__isSale" sx={{position: 'absolute', top: "13px", left: "45px"}}
               badgeContent={"Распродажа"}
               color="primary"> </Badge>
      }
    </CardContent>
    <CardActions className="product__actions" sx={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
      <Link to={`/products/${product.id}`}>
        <Button className="product__details" variant="contained" size="small"
                sx={{color: 'white', position: 'relative', paddingRight: "27px"}}>
          <span>Деталі</span>
          <InfoIcon className="product__addToCardIcon"
                    sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
        </Button>
      </Link>

      <Button className="product__addToCard" variant="contained" size="small"
              sx={{margin: "0 auto", color: 'white', position: 'relative', paddingRight: "27px"}}>
        <span>B корзину</span>
        <ShoppingCartIcon className="product__addToCardIcon"
                          sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
      </Button><br/>
    </CardActions>

    {/* DELETE STRING BEYOND */}

    {/*<Link to={`/order-1`}>*/}
    {/*  <Button className="product__details" variant="contained" size="small"*/}
    {/*          sx={{margin: "0 auto", color: 'white', position: 'relative', paddingRight: "27px"}}>*/}
    {/*    <span>Order-1</span>*/}
    {/*  </Button>*/}
    {/*</Link>*/}
    {/*<Link to={`/order-2`}>*/}
    {/*  <Button className="product__details" variant="contained" size="small"*/}
    {/*          sx={{margin: "0 auto", color: 'white', position: 'relative', paddingRight: "27px"}}>*/}
    {/*    <span>Order-2</span>*/}
    {/*  </Button>*/}
    {/*</Link>*/}
  </Card>
}