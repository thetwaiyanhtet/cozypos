import React from "react";
import dishes from "../Assets/dishes";

const PopularDishes = () => {
  return (
    <div className=" w-full border rounded-md bg-bgPrimary">
      <div className=" flex items-center justify-between p-5">
        <p className=" text-2xl">popular dishes</p>
        <p className=" underline">see all</p>
      </div>
      {dishes.map((item, index) => (
        <div
          key={index}
          className=" flex justify-between items-center w-[500px] border rounded-md bg-cardBg p-2 mx-5"
        >
          <div className=" flex items-center gap-5">
            <img src={item.img} alt="..." />
            <div>
              <p>{item.name}</p>
              <p>serving : 01 person</p>
            </div>
          </div>

          <div>
            <p>in stock</p>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularDishes;
