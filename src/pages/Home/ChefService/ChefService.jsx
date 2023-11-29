import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div>
      <div className="absolute">
        <img src={chefService} alt="Chef Service" />
      </div>
      <div className="relative translate-y-1/2 left-0 right-0 bottom-0 m-auto px-12 py-12 w-2/3 bg-white text-black rounded-xl">
        <h2 className="text-center mb-2 text-xl italic tracking-widest font-bold">
          Eatery Store
        </h2>
        <p className="mt-8">
          At Chef's Table, customers get to experience a unique culinary journey
          featuring some of the most popular cuisines such as Mexican, Japanese,
          Korean, Chinese, Indian, Fast Food, Fine Dining, Vegan and so on. The
          versatile cuisines are perfect for those looking to taste a wide range
          of food items from different restaurants all under one roof.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
