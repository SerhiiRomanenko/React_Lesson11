import React from "react";
import {Route, Routes} from "react-router";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Delivery } from "../../pages/Delivery";
import { Catalog } from "../../pages/Catalog";
import { Cart } from "../../pages/Cart";

export function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="delivery" element={<Delivery />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  )
}