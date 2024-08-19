import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
      <div className=" min-h-screen flex flex-col items-center justify-center ">
        <h1 className=" text-center text-cSecondary">COSYPOS</h1>
        <div className=" rounded-xl bg-bgPrimary p-3 w-[500px]">
          <div className=" text-center">
            <h1>sign up!</h1>
            <p className=" text-sm">
              please enter your credentials below to continue
            </p>
          </div>
          <form action="#" method="get" className=" space-y-5 p-10 mt-5">
            <div>
              <p className=" text-sm">username</p>
              <input
                type="text"
                placeholder="Enter your username"
                className=" login-input"
              />
            </div>
            <div>
              <p className=" text-sm">email</p>
              <input
                type="email"
                placeholder="Enter your email"
                className=" login-input"
              />
            </div>
            <div className=" relative pb-3">
              <p className=" text-sm">password</p>
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Enter your password"
                className=" login-input"
              />
              <div className=" absolute right-4 bottom-7" onClick={toggleShowPassword}>
                {showPassword && showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div>
              <div className=" flex justify-center">
                <button className=" rounded-md px-5 py-3 bg-cSecondary text-cPrimary">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className=" text-center pb-3">
          back to{" "}
          <Link to="/">
            <span className=" underline cursor-pointer">login</span>
          </Link>
        </div>
        </div>
      </div>
  );
};

export default SignUp;
