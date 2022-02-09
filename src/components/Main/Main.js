import React from "react";
import {Route, Routes} from "react-router";
import {Home} from "../../pages/Home";
import {About} from "../../pages/About";
import {Delivery} from "../../pages/Delivery";
import {Catalog} from "../../pages/Catalog";
import {Cart} from "../../pages/Cart";
import {ItemPage} from "../../pages/ItemPage";
import {OrderStep1} from "../../pages/OrderStep1";
import {OrderStep2} from "../../pages/OrderStep2";
import {OrderStep3} from "../../pages/OrderStep3";

export function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="delivery" element={<Delivery/>}/>
      <Route path="products" element={<Catalog/>}/>
      <Route path="products/:id" element={<ItemPage/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="order-1" element={<OrderStep1/>}/>
      <Route path="order-2" element={<OrderStep2/>}/>
      <Route path="order-3" element={<OrderStep3/>}/>
    </Routes>
  )
}