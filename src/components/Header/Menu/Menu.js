import React, {useState} from "react";
import {Link} from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ListIcon from "@mui/icons-material/List";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Switch, Badge} from "@mui/material";

// import {theme} from "../../../services/theme";

export function Menu() {
  const [lightMode, setLightMode] = useState(true);
  return <ul className="header__menu">
    <li>
      <nav style={{marginRight: '20px'}}>
        <Link to="/about">
          <InfoIcon fontSize="large" sx={{
            display: "flex",
            flexDirection: 'row',
            color: "white",
            marginLeft: "auto",
            marginRight: "auto"
          }}/>
          <span style={{color: "white"}}>Про нас</span>
        </Link>
      </nav>
    </li>

    <li>
      <nav style={{display: 'flex', marginRight: '20px'}}>
        <Link to="delivery">
          <LocalShippingIcon fontSize="large" sx={{
            display: "flex",
            flexDirection: 'row',
            color: "white",
            marginLeft: "auto",
            marginRight: "auto"
          }}/>
          <span style={{color: "white"}}>Дотавка та оплата</span>
        </Link><br/>
      </nav>
    </li>

    <li>
      <nav style={{marginRight: '20px'}}>
        <Link to="/products">
          <ListIcon fontSize="large" sx={{
            display: "flex",
            flexDirection: 'row',
            color: "white",
            marginLeft: "auto",
            marginRight: "auto"
          }}/>
          <span style={{color: "white"}}>Каталог</span>
        </Link>
      </nav>
    </li>

    <li>
      <nav style={{marginRight: '20px'}}>
        <Badge badgeContent={1} color="primary">
          <Link to="/cart">
            <ShoppingBasketIcon fontSize="large" sx={{
              display: "flex",
              flexDirection: 'row',
              color: "white",
              marginLeft: "auto",
              marginRight: "auto"
            }}/>
            <span style={{color: "white"}}>Корзина</span>
          </Link>
        </Badge>
      </nav>
    </li>
    <Switch checked={lightMode} onChange={() => setLightMode(!lightMode)}/>

  </ul>
}