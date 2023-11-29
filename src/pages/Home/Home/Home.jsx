import React from "react";
import Cartegories from "../Categories/Cartegories";
import ChefService from "../ChefService/ChefService";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cartegories />
      <ChefService />
    </div>
  );
};

export default Home;
