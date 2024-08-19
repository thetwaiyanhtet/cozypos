import React from "react";
import SideMenuBar from "../Components/SideMenuBar";
import { FaBell } from "react-icons/fa";
import icon from "../Assets/profile-img.png";
import PopularDishes from "../Components/PopularDishes";
import DailySalesCard from "../Components/DailySalesCard";
import MonthlyRevenueCard from "../Components/MonthlyRevenueCard";
import TableOccupyCard from "../Components/TableOccupyCard";


const Dashboard = () => {
  return (
    <div>
      <SideMenuBar />
      <div className=" ml-36 min-h-screen px-10 ">
        <div className=" flex justify-between items-center py-3">
          <p className=" text-xl">dashboard</p>
          <div className=" flex items-center">
            <p className=" border-r pr-3 relative">
              <FaBell size={20} />
              <div className=" absolute -top-1 right-2 rounded-full w-4 h-4 bg-red-600 text-xs text-center">
                11
              </div>
            </p>
            <p className=" pl-3">
              <img src={icon} alt="..." className=" w-14" />
            </p>
          </div>
        </div>
        <div className=" flex justify-between mt-5 mb-10">
          <DailySalesCard/>
          <MonthlyRevenueCard/>
          <TableOccupyCard/>
          <TableOccupyCard/>
        </div>
        <PopularDishes/>
      </div>
    </div>
  );
};

export default Dashboard;
