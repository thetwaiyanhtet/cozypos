import React from "react";
import { FaDollarSign } from "react-icons/fa";

const DailySalesCard = () => {
  return (
    <div>
      <div className=" border border-none rounded-md w-72 p-3 space-y-10 bg-bgPrimary">
        <div>
          <div className="flex justify-between space-y-2 items-center">
            <p>daily sales</p>
            <div className=" bg-cSecondary p-2 rounded-full">
              <FaDollarSign />
            </div>
          </div>
          <p className=" text-xl font-bold">$2k</p>
        </div>
        <div className=" flex justify-between">
          <p>9 february 2024</p>
          <p>//////////</p>
        </div>
      </div>
    </div>
  );
};

export default DailySalesCard;
