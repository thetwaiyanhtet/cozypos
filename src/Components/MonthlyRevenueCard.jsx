import React from "react";
import { FaMoneyBill} from 'react-icons/fa'

const MonthlyRevenueCard = () => {
  return (
    <div>
      <div className=" border border-none p-3 rounded-md bg-bgPrimary w-72 space-y-10">
        <div>
          <div className="flex justify-between space-y-2 items-center">
            <p>monthly revenue</p>
            <div className=" bg-cSecondary p-2 rounded-full">
              <FaMoneyBill />
            </div>
          </div>
          <p className=" text-xl font-bold">$55k</p>
        </div>
        <div className=" flex justify-between">
          <p>1 jan - 1 feb</p>
          <p>//////////</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyRevenueCard;
