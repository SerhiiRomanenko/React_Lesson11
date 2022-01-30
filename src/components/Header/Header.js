import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import headerLogo from "./../../assets/images/Icons/header_logo-1.png";
import {Typography} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ListIcon from '@mui/icons-material/List';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export function Header() {

  return <header className="header">
    <div className="header__backHome">
      <nav>
        <Link to="/">
          <img className="header__photo" alt="Go Home" src={headerLogo}/>
        </Link>
      </nav>
      <nav>
        <Link to="/">
          <Typography variant="h2" component="h2" sx={{color: "white", display: "inline"}}>
            Rozetka.ua
          </Typography>
        </Link>
      </nav>
    </div>
    <ul className="header__menu">

      <li>
        <nav style={{marginRight: '20px'}}>
          <Link to="/about">
            <InfoIcon fontSize="large"  sx={{display: "flex", flexDirection: 'row', color: "white" ,marginLeft: "auto", marginRight: "auto"}}/>
            <span style={{color: "white"}}>Про нас</span>
          </Link>
        </nav>
      </li>

      <li>
        <nav style={{display: 'flex', marginRight: '20px'}}>
          <Link to="delivery">
            <LocalShippingIcon fontSize="large"  sx={{display: "flex", flexDirection: 'row', color: "white" ,marginLeft: "auto", marginRight: "auto"}}/>
            <span style={{color: "white"}}>Дотавка та оплата</span>
          </Link><br/>
        </nav>
      </li>

      <li>
        <nav style={{marginRight: '20px'}}>
          <Link to="/catalog">
            <ListIcon fontSize="large"  sx={{display: "flex", flexDirection: 'row', color: "white", marginLeft: "auto", marginRight: "auto"}}/>
            <span style={{color: "white"}}>Каталог</span>
          </Link>
        </nav>
      </li>


      <li>
        <nav style={{marginRight: '20px'}}>
          <Link to="/cart">
            <ShoppingBasketIcon fontSize="large"  sx={{display: "flex", flexDirection: 'row', color: "white", marginLeft: "auto", marginRight: "auto"}}/>
            <span style={{color: "white"}}>Корзина</span>
          </Link>
        </nav>
      </li>

    </ul>

  </header>
}