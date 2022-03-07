import React from "react";

const Spinningrays = ({ show }) => {
  return (
    <div
      className={`-z-0 absolute top-1/2 transition-opacity duration-[1000ms] w-full h-5 left-0 flex justify-center animate-spin-slow ${
        show ? "opacity-10" : "opacity-0"
      }`}
    >
      <div
        className={`absolute h-full flex transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
      <div
        className={`absolute h-full flex rotate-45 transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
      <div
        className={`absolute h-full flex -rotate-45 transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
      <div
        className={`absolute h-full flex rotate-[22.5deg] transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
      <div
        className={`absolute h-full flex -rotate-[22.5deg] transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
      <div
        className={`absolute h-full flex rotate-[67.5deg] transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
      <div
        className={`absolute h-full flex -rotate-[67.5deg] transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
      <div
        className={`absolute h-full flex rotate-90 transition-all duration-[1000ms] ${
          show ? "w-[175vw]" : "w-0"
        } `}
      >
        <div className={`h-full w-full bg-gradient-to-l from-white `}></div>
        <div className="h-full w-full bg-gradient-to-r from-white"></div>
      </div>
    </div>
  );
};

export default Spinningrays;
