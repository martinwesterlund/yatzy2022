import React from "react";

const ScoreBox = ({text, bold, value, setValue, calcResult, turn, setTurn, resetDices, setGameStarted, setHlScore}) => {
  
  let valueToShow = value

  const submitScore = () => {
    setValue(calcResult(text))
    setTurn(0)
    resetDices()
    setGameStarted(true)
    setHlScore(text + ' - ' + calcResult(text) + 'p')
  }
  return (
    <div onClick={() => submitScore()} className={`text-sm sm:text-base flex justify-between items-center cursor-pointer py-1 px-2 md:py-[6px] md:px-4 bg-white transition-all duration-1000 ${value === null ? 'bg-opacity-10' : 'bg-opacity-0'} text-white rounded-lg ${bold && 'font-bold'} ${(turn === 0 || value !== null || text === 'Bonus') && 'pointer-events-none'}`}>
      <span className="">{text}</span>
      <span className={`bg-white text-black rounded-full w-6 h-6 grid place-content-center text-xs`}>
        {valueToShow}

      </span>
    </div>
  );
};

export default ScoreBox;
