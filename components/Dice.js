import React, { useState, useEffect } from "react";

const Dice = ({ gameStarted, innerRef, dice, setDice }) => {
  
  const [locked, setLocked] = useState(dice.locked);

  const lockDice = () => {
    setDice({
      ...dice, 
      locked: !dice.locked,
    })
    innerRef.current.classList.toggle("locked");
  };

  useEffect(() => {
    if(innerRef.current.classList.contains('locked')){
      setLocked(true)
    } else {
      setLocked(false)
    }
  }, []);
  return (
    <>
      <div
        // ref={innerRef}
        onClick={() => lockDice()}
        className={`relative w-12 h-12 cursor-pointer transform transition-all duration-[200ms] ${
          dice.locked
            ? "scale-100 shadow-none border-black rounded-[4px]"
            : "shadow-md scale-110"
        }`}
      >
        <div
          ref={innerRef}
          className={`w-full h-full transform transition-all ${gameStarted ? 'duration-[2000ms]' : 'duration-[1ms]'} dice `}
        >
          <div className="side bg-white">
            <div className="dot one-1"></div>
          </div>
          <div className="side bg-white">
            <div className="dot two-1"></div>
            <div className="dot two-2"></div>
          </div>
          <div className="side bg-white">
            <div className="dot three-1"></div>
            <div className="dot three-2"></div>
            <div className="dot three-3"></div>
          </div>
          <div className="side bg-white">
            <div className="dot four-1"></div>
            <div className="dot four-2"></div>
            <div className="dot four-3"></div>
            <div className="dot four-4"></div>
          </div>
          <div className="side bg-white">
            <div className="dot five-1"></div>
            <div className="dot five-2"></div>
            <div className="dot five-3"></div>
            <div className="dot five-4"></div>
            <div className="dot five-5"></div>
          </div>
          <div className="side bg-white">
            <div className="dot six-1"></div>
            <div className="dot six-2"></div>
            <div className="dot six-3"></div>
            <div className="dot six-4"></div>
            <div className="dot six-5"></div>
            <div className="dot six-6"></div>
          </div>
        </div>
      {dice.locked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-6 text-yellow-600 left-1/2 -translate-x-1/2   h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
      </div>
    </>
  );
};

export default Dice;
