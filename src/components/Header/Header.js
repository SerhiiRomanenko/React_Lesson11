import React from "react";
import {Link} from "react-router-dom";
import './Header.scss';
import headerLogo from "./../../assets/images/Icons/header_logo-1.png";
import {Typography} from "@mui/material";
import {Menu} from "./Menu";

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
    <Menu/>
  </header>
}