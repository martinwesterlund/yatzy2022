import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AppContext from "../AppContext";

const Yatzyeffect = () => {
  const { isYatzy, setIsYatzy } = useContext(AppContext);
  const letters = ["Y", "a", "t", "z", "y", "!"];

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
    hidden: { y: -300, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.75,
      },
    },
    exit: {
      y: 500,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setIsYatzy(false);
    }, 3000);
  }, [isYatzy]);

  return (
    <div
      className={`absolute w-screen h-full transition ${
        isYatzy ? "opacity-1" : "opacity-0"
      }`}
    >
      <AnimatePresence exitBeforeEnter>
        {isYatzy && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="away"
            className={`absolute w-screen h-full bg-black bg-opacity-70 z-50 backdrop-filter grid place-content-center`}
          >
            <div className="flex">
              {letters.map((letter, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  initial={{ y: -300, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: "spring",
                      bounce: 0.75,
                    },
                  }}
                  exit={{ opacity: 0, scale: 3 }}
                  className="text-white text-[20vw] font-oleo yatzy mb-[10vh]"
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Yatzyeffect;
