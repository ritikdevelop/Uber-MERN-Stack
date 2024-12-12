import React from "react";
import { Link } from "react-router-dom";
const UserSignUp = () => {
  return (
    <div className="p-7">
      <div>
        <img
          className="w-16 mb-8"
          src="/images/uber-logo.png"
          alt="Uber icon"
          loading="lazy"
        />
        <form>
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex gap-5 mb-5">
          <input
            type="text"
            placeholder="First Name"
            required
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
          />
          </div>

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
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Sign up
          </button>

          <p className="text-center mb-1">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600 font-medium">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div>
        <button className="bg-[#10b461] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign up as Captain
        </button>
      </div>
    </div>
  );
};

export default UserSignUp;
