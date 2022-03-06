import React from "react";

const BigDice = ({ show }) => {
  return (
    <div className="w-full h-full absolute grid place-content-center">
      <div
        className={`relative w-12 h-12 font-oleo cursor-pointer transition-all duration-1000 bigDice ${
          show ? "top-0" : "-top-[100vh]"
        }`}
      >
        <div className={`w-full h-full dice `}>
          <div className="side bg-white grid place-content-center">
            <span className="text-3xl">
              <div className="bg-black dot-big w-2 h-2 rounded-full"></div>
            </span>
          </div>
          <div className="side bg-white grid place-content-center">
            <span className="text-3xl relative">
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 left-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 right-2"></div>
            </span>
          </div>
          <div className="side bg-white grid place-content-center">
            <span className="text-3xl">
              <div className="bg-black dot-big w-2 h-2 rounded-full"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 left-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 right-2"></div>
            </span>
          </div>
          <div className="side bg-white grid place-content-center">
            <span className="text-3xl">
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 left-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 right-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 right-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 left-2"></div>
            </span>
          </div>
          <div className="side bg-white grid place-content-center">
            <span className="text-3xl">
              <div className="bg-black dot-big w-2 h-2 rounded-full"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 left-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 right-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 right-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 left-2"></div>
            </span>
          </div>
          <div className="side bg-white grid place-content-center">
            <span className="text-3xl">
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 left-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-5 left-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 left-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-2 right-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute top-5 right-2"></div>
              <div className="bg-black dot-big w-2 h-2 rounded-full absolute bottom-2 right-2"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigDice;
