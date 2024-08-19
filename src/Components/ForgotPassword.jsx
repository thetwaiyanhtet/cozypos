import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center ">
      <h1 className=" text-cSecondary text-center font-serif">COSYPOS</h1>
      <div className=" rounded-xl bg-bgPrimary p-3 w-[500px]">
        <div className="text-center">
          <h1>forgot your password?</h1>
          <p>Please enter your username or email to recover your password</p>
        </div>
        <form className=" p-10 space-y-7">
          <div>
            <p className=" text-sm">username or email</p>
            <input
              type="text"
              placeholder="Enter your name or email"
              className=" login-input"
            />
          </div>
          <div className=" flex justify-center ">
            <button className=" rounded-md px-5 py-3 bg-cSecondary text-cPrimary">
              Submit Now
            </button>
          </div>
        </form>
        <div className=" text-center">
          back to{" "}
          <Link to="/">
            <span className=" underline cursor-pointer">login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
