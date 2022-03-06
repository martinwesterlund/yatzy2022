import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AppContext from "../AppContext";
const GameOver = () => {
  const { setMenuOpen, finalPoints, startNewGame } = useContext(AppContext);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    away: {
      opacity: 0,
      y: 500,
      transition: {
        duration: 3,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1 + i * 0.3,
        duration: 2,
        type: "spring",
        bounce: 0.75,
      },
    }),
    exit: {
      y: 500,
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        className={`absolute z-40 bg-black backdrop-blur-sm w-full h-full bg-opacity-70 `}
      ></motion.div>
      <div className="z-40 absolute h-screen flex flex-col justify-center items-center">
        <AnimatePresence>
          <motion.div
            key="label"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className="text-yatzyYellow mb-6 text-3xl font-oleo "
          >
            Ditt resultat:
          </motion.div>
          <motion.div
            key="pContainer"
            variants={container}
            initial="hidden"
            animate="show"
            exit="away"
            className="flex z-40"
          >
            {[...finalPoints.toString(), "p"].map((point, i) => (
              <motion.div
                key={i}
                variants={item}
                custom={i}
                className="font-oleo yatzy text-8xl mx-2"
              >
                {point}
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            key="btn1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
            className={`mt-12 py-4 px-8 bg-yatzyYellow border-2 border-yatzyRed active:scale-90 transition-all duration-300 rounded-full flex items-center `}
            onClick={() => setMenuOpen(true)}
          >
            Se highscore
          </motion.button>
          <motion.button
            key="btn2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.5, duration: 1 } }}
            className={`mt-4 py-4 px-8 bg-yatzyYellow border-2 border-yatzyRed active:scale-90 transition-all duration-300 rounded-full flex items-center `}
            onClick={() => startNewGame()}
          >
            Spela igen
          </motion.button>
        </AnimatePresence>
      </div>
    </>
  );
};

export default GameOver;
