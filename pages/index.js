import { useState, useEffect, useRef, useContext } from "react";
import Head from "next/head";
import BigDice from "../components/BigDice";
import Dice from "../components/Dice";
import GameOver from "../components/GameOver";
import ScoreBoard from "../components/ScoreBoard";
import SmallDice from "../components/SmallDice";
import Spinningrays from "../components/SpinningRays";
import Yatzyeffect from "../components/YatzyEffect";
import moment from "moment";
import HighScore from "../components/HighScore";
import AppContext from "../AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Yatzy = () => {
  const {
    gameStarted,
    setGameStarted,
    gameOver,
    hlScore,
    setIsYatzy,
    turn,
    setTurn,
    setDiceValues,
    highScore,
    setHighScore,
  } = useContext(AppContext);
  const min = 1;
  const max = 24;

  const spin0 = [0, 360, 720, 1080, 1440, 1800];
  const spin90 = [90, 450, 810, 1170, 1530, 1890];
  const spin180 = [180, 540, 900, 1260, 1620, 1980];
  const spin270 = [270, 630, 990, 1350, 1710, 2070];

  const diceElement1 = useRef(null);
  const diceElement2 = useRef(null);
  const diceElement3 = useRef(null);
  const diceElement4 = useRef(null);
  const diceElement5 = useRef(null);
  const allDiceElements = [
    diceElement1,
    diceElement2,
    diceElement3,
    diceElement4,
    diceElement5,
  ];
  const [dice1, setDice1] = useState({
    value: 0,
    locked: false,
  });
  const [dice2, setDice2] = useState({
    value: 0,
    locked: false,
  });
  const [dice3, setDice3] = useState({
    value: 0,
    locked: false,
  });
  const [dice4, setDice4] = useState({
    value: 0,
    locked: false,
  });
  const [dice5, setDice5] = useState({
    value: 0,
    locked: false,
  });
  const allDice = [dice1, dice2, dice3, dice4, dice5];

  const roll = () => {
    setTurn(turn + 1);
    setGameStarted(true);
    allDiceElements.forEach((dice) => {
      if (!dice.current.classList.contains("locked")) {
        let value = Math.floor(Math.random() * 6) + 1;
        let xTurn;
        let zTurn;

        switch (value) {
          case 1:
            xTurn = spin0[Math.floor(Math.random() * 6)];
            zTurn = (Math.floor(Math.random() * (max - min)) + min) * 90;
            break;
          case 2:
            xTurn = spin90[Math.floor(Math.random() * 6)];
            zTurn = spin90[Math.floor(Math.random() * 6)];
            break;
          case 3:
            xTurn = spin90[Math.floor(Math.random() * 6)];
            zTurn = spin180[Math.floor(Math.random() * 6)];
            break;
          case 4:
            xTurn = spin90[Math.floor(Math.random() * 6)];
            zTurn = spin0[Math.floor(Math.random() * 6)];
            break;
          case 5:
            xTurn = spin90[Math.floor(Math.random() * 6)];
            zTurn = spin270[Math.floor(Math.random() * 6)];
            break;
          case 6:
            xTurn = spin180[Math.floor(Math.random() * 6)];
            zTurn = (Math.floor(Math.random() * (max - min)) + min) * 90;
            break;
        }

        dice.current.style.transform =
          "rotateX(" + xTurn + "deg) rotateZ(" + zTurn + "deg)";

        allDice[allDiceElements.indexOf(dice)].value = value;
      }
    });
    checkIfYatzy();
  };

  const checkIfYatzy = () => {
    if (
      dice1.value === dice2.value &&
      dice1.value === dice3.value &&
      dice1.value === dice4.value &&
      dice1.value === dice5.value
    ) {
      setTimeout(() => {
        setIsYatzy(true);
      }, 2000);
    } else {
      setIsYatzy(false);
    }
  };

  const resetDices = () => {
    allDiceElements.forEach((dice) => dice.current.classList.remove("locked"));
    allDice.forEach((dice) => (dice.locked = false));
  };

  useEffect(() => {
    allDiceElements.forEach((dice) => {
      let x = (Math.floor(Math.random() * (max - min)) + min) * 90;
      let z = (Math.floor(Math.random() * (max - min)) + min) * 90;
      dice.current.style.transform =
        "rotateX(" + x + "deg) rotateZ(" + z + "deg)";
    });
  }, []);

  useEffect(() => {
    let vals = [];
    allDice.forEach((dice) => vals.push(dice.value));
    setDiceValues(vals.sort().reverse());
  }, [dice1.value, dice2.value, dice3.value, dice4.value, dice5.value]);

  const saveScore = (score) => {
    let newHighScore = [];
    let oldHighScore = highScore;

    if (oldHighScore) {
      oldHighScore.forEach((s) => {
        newHighScore.push(s);
      });
    }

    newHighScore.push({ score: score, date: moment().format("D/M YYYY") });

    newHighScore.sort((a, b) =>
      a.score < b.score ? 1 : b.score < a.score ? -1 : 0
    );
    setHighScore(newHighScore);
    let sum = 0;
    newHighScore.forEach((s) => (sum += s.score));
  };

  useEffect(() => {
    setHighScore(JSON.parse(localStorage.getItem("yatzy2022")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("yatzy2022", JSON.stringify(highScore));
  }, [highScore]);

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <div
        className={`h-screen relative flex flex-col justify-around transition-all duration-500 items-center bg-gradient-to-b overflow-hidden from-yatzyBlue to-yatzyBlueDark`}
      >
        {gameOver && <GameOver />}
        <HighScore />

        <Yatzyeffect />
        <div className="w-full mt-[10vh] h-[15vh] md:h-[15vh] relative">
          <Spinningrays show={turn === 0}></Spinningrays>
          <BigDice gameStarted={gameStarted} show={turn === 0} />

          <div
            className={`z-30 absolute font-oleo yatzy top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl transition-all ease-in duration-[500ms] ${
              turn != 0 || gameStarted
                ? "opacity-0 scale-0"
                : "opacity-1 scale-1"
            }`}
          >
            Yatzy
          </div>
          <div className="w-full h-full flex justify-center items-center ">
            <div
              className={`absolute z-10 w-full max-w-md p-4 flex justify-between transition duration-[2000ms] ${
                turn === 0
                  ? "opacity-0 -translate-y-full scale-150"
                  : "opacity-1 scale-100"
              }`}
            >
              <Dice
                gameStarted={gameStarted}
                dice={dice1}
                setDice={setDice1}
                innerRef={diceElement1}
              ></Dice>
              <Dice
                gameStarted={gameStarted}
                dice={dice2}
                setDice={setDice2}
                innerRef={diceElement2}
              ></Dice>
              <Dice
                gameStarted={gameStarted}
                dice={dice3}
                setDice={setDice3}
                innerRef={diceElement3}
              ></Dice>
              <Dice
                gameStarted={gameStarted}
                dice={dice4}
                setDice={setDice4}
                innerRef={diceElement4}
              ></Dice>
              <Dice
                gameStarted={gameStarted}
                dice={dice5}
                setDice={setDice5}
                innerRef={diceElement5}
              ></Dice>
            </div>
            <AnimatePresence exitBeforeEnter>
              {turn == 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0, scale: 5 }}
                  className={`absolute font-oleo yatzy text-center text-5xl md:text-8xl`}
                >
                  {hlScore}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full h-full relative mb-[10vh]">
          <div className="absolute bottom-4 w-full flex flex-col items-center justify-center">
            <ScoreBoard resetDices={resetDices} saveScore={saveScore} />

            <button
              className={`mt-4 py-4 px-8 bg-yatzyYellow border-2 border-yatzyRed active:scale-90 transition-all duration-300 rounded-full flex items-center ${
                turn > 2 ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
              onClick={() => roll()}
            >
              <SmallDice turn={3 - turn} />
              kast kvar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yatzy;
