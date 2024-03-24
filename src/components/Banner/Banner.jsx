import React from "react";
import bgImage from "../../assets/bg-image.png";
import Navbar from "../Navbar/Navbar";
const Banner = () => {
  const background = {
    backgroundImage: `linear-gradient(#FFFFFFF2, #FFFFFFF2),url(${bgImage})`,
    width: "100%",
    height: "500px",
  };
  return (
    <div style={background}>
      <div className="">
        <Navbar />
      </div>
      <div className="flex justify-center items-center w-full h-[500px]">
        <div>
          <h2 className="text-4xl font-bold">
            I Grow By Helping People In Need
          </h2>
          <div className="flex items-center justify-center mt-5">
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs rounded-e-none"
              />
            </div>
            <button className="btn btn-primary rounded-s-none">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
