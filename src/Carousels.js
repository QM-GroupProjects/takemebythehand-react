import React, { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import './App.css';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import data from './data';



export default class Carousels extends React.Component {

  render() {
    let londonPlaces = [];
    let places = data.central[0];
    const keys = Object.keys(places);
    for (let place of keys) {
      if(places[place].mood.hasOwnProperty('adventurous')){
        londonPlaces.push(places[place]);
      }
    }
    console.log(londonPlaces[2].description);



    let renderPlaces = [];
    for (let i=0; i<londonPlaces.length; i++){
      renderPlaces.push(<div><div className="carouselElement"><img src={londonPlaces[i].picture} className="carouselPics"></img>
            <p>{londonPlaces[i].description}</p></div></div>);
    }


    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: 'slides'
    };
    return (
      <div>
      <NavLink to="/"><img src="./res/img/icons/Home.png" id="homeIcon"></img></NavLink>
      <div id="carousel">
        <Slider {...settings}>
          {renderPlaces}
        </Slider>
      </div>
      </div>
    );
  }
}