import React from "react";
import foto1 from "../../../imagenes/uñas1.jpg";
import foto2 from "../../../imagenes/uñas2.jpg"
import foto3 from "../../../imagenes/uñas3.jpg"
import foto4 from "../../../imagenes/uñas4.jpg"
import foto5 from "../../../imagenes/uñas5.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./Galeria.module.css";

const Galeria = ()=>{

const carrousel = [foto1, foto2, foto3, foto4, foto5 ];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


    return (
        <>
        
        <h1 className={style.h1}>Mira nuestros trabajos</h1>
        <div className="carousel-container">
      <Slider {...settings}>
        {carrousel.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={{ height: '20rem'}} />
          </div>
        ))}
      </Slider>
    </div>
     
        </>
    )
}

export default Galeria; 