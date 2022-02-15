import React from "react";
import "./OrderStep2.scss";
import {Button} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export function OrderStep2() {

  const navigate = useNavigate();
  return <main className="order">
    <div>
      This page is under construction ;)
    </div>

    <h3 className="order__title">
      Оформление заказа - шаг 2:
    </h3>

    <Link to="/order-3">
      <Button className="order__submitButton"
              variant="contained"
              size="small"
              type="submit"
              sx={{
                color: 'white',
                position: 'relative',
                paddingRight: "27px",
                marginRight: '20px',
                width: '100%',
                marginBottom: "15px"
              }}>
        <span>Продовжити</span>
        <ArrowForwardIosIcon className="product__addToCardIcon"
                             sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
      </Button>
    </Link>

    <Button className="order__goBack"
            onClick={() => navigate(-1)}
            variant="contained"
            size="small"
            type="submit"
            sx={{color: 'white', position: 'relative', paddingRight: "27px", width: '100%',}}>
      <span>Назад</span>
      <ArrowBackIosNewIcon className="product__addToCardIcon"
                           sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
    </Button>
  </main>
}