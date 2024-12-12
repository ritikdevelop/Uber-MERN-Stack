import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captainUserData, setCaptainUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainUserData({
      email: email,
      password: password,
    });
    // console.log(captainUserData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="/images/uber-driver.svg"
          alt="Uber driver image"
          loading="lazy"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Enter Email</h3>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2 mt-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center mb-1 font-normal">
          join a fleet?{" "}
          <Link to={"/captain-signup"} className="text-blue-600 font-medium">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-[#d5622d] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base justify-center flex items-center mb-5"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
