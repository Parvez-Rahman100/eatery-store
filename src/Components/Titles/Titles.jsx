import React from "react";

const Titles = ({ title, subTitle }) => {
  return (
    <div className="my-10 md:w-3/12 mx-auto">
      <p className="text-emerald-600 text-center text-sm mb-4">
        ~~~{subTitle}~~~
      </p>
      <h3 className="text-4xl text-center text-emerald-600 font-bold uppercase border-y-4 p-5">
        {title}
      </h3>
    </div>
  );
};

export default Titles;
