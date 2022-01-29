import aboutPic from "../../images/Pictures/about_pic.png";
import React from "react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "./About.scss";
const API_KEY = process.env.REACT_APP_API_KEY;

export function About() {
  const containerStyle = {
    width: "100%",
    height: '400px'
  };

  const center = {
    lat: 46.515,
    lng: 30.823
  };
  return (
    <div className="about">
      <div className="about__background" style={{ height: "350px", background: `url(${aboutPic}) no-repeat center center`}}>
      </div>

      <h2 className="about__title">Про нас: </h2>
      <div className="about__table">

        <div className="about__row">
          <h3 className="about__line">ГОЛОВНИЙ ОФІС РОЗЕТКИ: </h3>
          <p>65012, Одеса, вул. Дерибасівська 4</p>
          <h3 className="about__line">Телефон (multi): </h3>
          <a className="about__link" href="tel:8665562561">+38 (044) 498-07-61</a><br/>
          <h3 className="about__line">Факс: </h3>
          <a className="about__link" href="tel:8665562578">+38 (044) 498-07-78</a><br/>
          <h3 className="about__line">e-mail: </h3>
          <a className="about__link" href="mailto:rozetka@gmail.com">rozetka@gmail.com</a><br/>
        </div>

        <div className="about__row">
          <h3>АДМІНІСТРАЦІЯ</h3>
          <p className="about__line">Сергій РОМАНЕНКО</p><a className="about__link" href="tel:8665562570">+3(096)5562570</a><br/>
          <p className="about__line">Ілля ПОМАЗКІН</p><a className="about__link" href="tel:8665562571">+3(096)5562571</a><br/>
          <p className="about__line">Павло ДРУМОВ</p><a className="about__link" href="tel:8665562572">+3(096)5562572</a><br/>
          <p className="about__line">Ілон МАСК</p><a className="about__link" href="tel:8665562573">+3(096)5562573</a>
        </div>
      </div>

      <LoadScript
        googleMapsApiKey ={API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
