import React, { useState, useContext } from "react";
import AppContext from "../AppContext";

import { motion, AnimatePresence } from "framer-motion";

const HighScore = () => {
  const { highScore, menuOpen, setMenuOpen, resetHighScore } =
    useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);

  const findAverage = (arr) => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
      return acc + val.score / length;
    }, 0);
  };

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="z-50 w-8 h-8 absolute right-5 top-5 cursor-pointer"
      >
        <div>
          <div
            className={`transition-all rounded-full duration-500 ${
              menuOpen
                ? "bg-yatzyBlue rotate-45 translate-y-[5px]"
                : "bg-yatzyYellow"
            } w-full h-[2px] mb-2`}
          ></div>

          <div
            className={`transition-all rounded-full duration-500 ${
              menuOpen
                ? "bg-yatzyBlue -rotate-45 -translate-y-[5px]"
                : "bg-yatzyYellow"
            } w-full h-[2px]`}
          ></div>
        </div>
      </button>

      <div
        className={`transition duration-1000 absolute z-30 bg-black w-full h-full ${
          menuOpen ? "bg-opacity-20 backdrop-blur-sm" : "bg-opacity-0 -z-50"
        }`}
      ></div>

      <div
        className={`z-40 flex flex-col justify-start transition-all duration-500 ease-out absolute w-4/5 md:w-2/5 h-[85vh] rounded-bl-3xl bg-yatzyYellow shadow-md text-yatzyBlue py-10 px-6 ${
          menuOpen ? "right-0 top-0" : "-right-full -top-full"
        }`}
      >
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "80%" }}
              transition={{ duration: 2 }}
              className="absolute bg-gradient-to-b from-yatzyBlue to-yatzyYellow left-2 top-2 w-px h-4/5"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "80%" }}
              transition={{ duration: 2 }}
              className="absolute bg-gradient-to-r from-yatzyBlue to-yatzyYellow left-2 top-2 w-4/5 h-px"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "80%" }}
              transition={{ duration: 2 }}
              className="absolute bg-gradient-to-t from-yatzyBlue to-yatzyYellow right-2 bottom-2 w-px h-4/5"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "80%" }}
              transition={{ duration: 2 }}
              className="absolute bg-gradient-to-l from-yatzyBlue to-yatzyYellow right-2 bottom-2 w-4/5 h-px"
            ></motion.div>
          </>
        )}
        <h1 className="font-bold text-center mb-4 font-oleo text-4xl">
          Topplistan
        </h1>
        <AnimatePresence exitBeforeEnter>
          {highScore.length > 0 && menuOpen ? (
            <motion.ul
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.5 }}
              exit={{ opacity: 0 }}
              className=" w-11/12  max-w-sm mx-auto bg-white p-4 sm:p-8 rounded-3xl shadow-md"
            >
              {highScore.slice(0, 10).map((item, index) => (
                <li
                  className="flex justify-between border-b border-dotted last:border-none border-black text-base whitespace-nowrap"
                  key={index}
                >
                  <span className="w-6">{index + 1 + ". "}</span>
                  <span className="w-12 text-right">{item.score} p</span>
                  <span className="w-24 text-right text-gray-500">
                    {item.date}
                  </span>
                </li>
              ))}
              <div className="mt-1">
                Totalt spelade matcher: {highScore.length}
              </div>
              <div className="">
                Din snittpoäng: {Math.round(findAverage(highScore))}p
              </div>
            </motion.ul>
          ) : (
            <div className=" text-center">Här var det tomt...</div>
          )}
        </AnimatePresence>
        {highScore.length > 0 && (
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="absolute bottom-4 right-4 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yatzyBlue mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Rensa listan
          </button>
        )}
        <AnimatePresence exitBeforeEnter>
          {modalOpen && highScore.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-center mt-2 text-yatzyBlue `}
            >
              <h1 className="mb-1">Är du säker på att du vill rensa listan?</h1>{" "}
              <button
                onClick={() => resetHighScore()}
                className="bg-yatzyRed text-white w-16 mx-2 py-1 rounded-full"
              >
                JA
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-yatzyBlue text-white w-16 mx-2 py-1 rounded-full"
              >
                NEJ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HighScore;
