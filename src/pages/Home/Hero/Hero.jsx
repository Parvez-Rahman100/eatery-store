import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Hero = () => {
  return (
    <Carousel>
      <div>
        <img className=" object-cover" src={img1} alt="banner" />
      </div>
      <div>
        <img className=" object-cover" src={img2} alt="banner" />
      </div>
      <div>
        <img className=" object-cover" src={img3} alt="banner" />
      </div>
      <div>
        <img className=" object-cover" src={img4} alt="banner" />
      </div>
      <div>
        <img className=" object-cover" src={img5} alt="banner" />
      </div>
      <div>
        <img className=" object-cover" src={img6} alt="banner" />
      </div>
    </Carousel>
  );
};

export default Hero;
