import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainSignUp = () => {

    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
    
      const [userData, setUserData] = useState({});
    
      const submitHandler = (e) => {
        e.preventDefault();
    
        setUserData({
          fullName:{
            firstName: firstName,
            lastName: lastName,
          },
          email: email,
          password: password,
        })
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
      };

  return (
    <div className="py-7 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-8"
          src="/images/uber-driver.svg"
          alt="Uber icon"
          loading="lazy"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg w-full font-medium mb-2">What's our Captain Name</h3>
          <div className="flex gap-5 mb-5">
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Enter Email</h3>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2 mt-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Sign up
          </button>
        </form>
        <p className="text-center mb-8">
          Already have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight mt-4">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignUp