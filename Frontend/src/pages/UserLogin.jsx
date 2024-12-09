import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-7">
      <div>
        <img
          className="w-16 mb-8"
          src="/images/uber-logo.png"
          alt="Uber icon"
          onClick={()=>{
            <Link to={"/"} />
          }}
          loading="lazy"
        />
        <form>
          <h3 className="text-lg font-medium mb-2">Enter Email</h3>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2 mt-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>

          <p className="text-center mb-1 font-normal">
            Don't have an account? <Link to={"/sign-up"} className="text-blue-600 font-medium">Create new Account</Link>
          </p>
        </form>
      </div>
      <div>
        <button className="bg-[#10b461] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
