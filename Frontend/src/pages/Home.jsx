import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url('/images/traffic-light.avif')] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-16 ml-8"
          src="/images/uber-logo.png"
          alt="Uber icon"
          loading="lazy"
        />
        <div className="bg-white pb-6 py-4 px-4">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link
            to={"/login"}
            className="flex justify-center items-center
          text-xl w-full bg-black text-white py-3 rounded mt-5"
          >
            <span className="flex-grow text-center flex justify-center items-center">
              Continue
            </span>
            <ArrowRight className="h-5 w-5 mr-4 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
