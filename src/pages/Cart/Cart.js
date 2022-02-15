import React from 'react';
import "./Cart.scss";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export function Cart() {
  return (
    <main className="cart">

      <div style={{marginBottom: '20px'}}>
        This page is under construction ;)
      </div>

      <Link to="/order-1">
        <Button className="cart__submitButton"
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  color: 'white',
                  position: 'relative',
                  paddingRight: "30px",
                  marginRight: '20px',
                  marginBottom: "15px"
                }}>
          <span>Оформити замовлення</span>
          <LocalMallIcon className="cart__addToCardIcon"
                         sx={{position: 'absolute', top: '1px', right: 0, paddingRight: "2px"}}/>
        </Button>
      </Link>
    </main>
  );
}
