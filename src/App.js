import React from 'react';
import "./assets/reset.scss";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";

export function App() {

  return (
    <div className="app">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
