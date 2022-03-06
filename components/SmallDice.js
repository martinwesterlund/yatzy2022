import React from 'react';

const SmallDice = ({turn}) => {
  return (
    <div className="bg-white rounded-sm w-6 h-6 flex justify-center items-center p-[1px] border border-black mr-2">
      <div className="w-full h-full -rotate-45 flex justify-center items-center">
      <div className={`bg-black rounded-full w-[5px] h-[5px] ${turn === 2 ? 'm-[2px]' : 'm-[1px]'}`}></div>
      {turn === 3 && <div className="bg-black rounded-full w-[5px] h-[5px] m-[1px]"></div>}
      {turn > 1 && <div className={`bg-black rounded-full w-[5px] h-[5px] ${turn === 2 ? 'm-[2px]' : 'm-[1px]'}`}></div>}
      </div>
      
    </div>
  );
}

export default SmallDice;
