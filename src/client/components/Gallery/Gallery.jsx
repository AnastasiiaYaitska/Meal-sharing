import React from "react";
import pictures from "./pictures.json";
import Slider from "react-slick";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {pictures.map(({ url }) => {
          return (
            <div key={url}>
              <img src={url} alt="meal photo" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Gallery;
