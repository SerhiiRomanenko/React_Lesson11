import React from "react";
import doneIcon from "../../assets/images/Icons/Done.png";
import "./OrderStep3.scss";
import {Button} from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import {Link} from "react-router-dom";

export function OrderStep3() {
  return <main className="order-3">
    <img className="order-3__donePicture" src={doneIcon} alt="done"/>
    <h2 className="order-3__title">Дякую, Ваше замовлення №1 оформлено.</h2>
    <h3 className="order-3__description">Наш менеджер з вами звяжеться в найближчий час.</h3>
    <Link to={"/products"}>
      <Button className="order-3__button" variant="contained" size="small"
              sx={{margin: "0 auto", color: 'white', position: 'relative', paddingRight: "27px"}}>
        <span>Каталог товарів</span>
        <ListIcon className="product__addToCardIcon"
                  sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
      </Button>
    </Link>
  </main>
}