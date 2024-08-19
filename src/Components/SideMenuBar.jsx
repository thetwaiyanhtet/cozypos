import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBorderStyle,
  FaClipboard,
  FaLayerGroup,
  FaFile,
  FaTable,
  FaClock,
  FaPeopleCarry,
  FaArrowAltCircleRight,
} from "react-icons/fa";

const SideMenuBar = () => {
  const menus = [
    { title: "dashboard", icon: <FaBorderStyle size={20} /> },
    { title: "menu", icon: <FaClipboard size={20} /> },
    { title: "staff", icon: <FaPeopleCarry size={20} /> },
    { title: "inventory", icon: <FaLayerGroup size={20} /> },
    { title: "reports", icon: <FaFile size={20} /> },
    { title: "order/table", icon: <FaTable size={20} /> },
    { title: "reservation", icon: <FaClock size={20} /> },
  ];
  return (
    <div className=" fixed left-0 top-0">
      <div className="relative text-center w-36 min-h-screen bg-bgPrimary rounded-tr-2xl rounded-br-2xl">
        <p className=" text-2xl font-semibold text-cSecondary">cosypos</p>
        <ul className=" mt-5 space-y-3">
          {menus.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.title}`}
              className={({ isActive }) =>
                `list-none cursor-pointer p-2 mx-5 duration-300 flex flex-col items-center space-y-1 ${
                  isActive ? "bg-cSecondary rounded-md text-cPrimary" : ""
                }`
              }
            >
              <div>{item.icon}</div>
              <p>{item.title}</p>
            </NavLink>
          ))}
        </ul>
        <div className=" flex flex-col items-center space-y-1 absolute bottom-4 left-12">
          <FaArrowAltCircleRight size={20} />
          <p>logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
