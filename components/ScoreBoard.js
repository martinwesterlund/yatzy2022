import React, { useState, useEffect, useContext } from "react";
import ScoreBox from "./ScoreBox";
import AppContext from "../AppContext";
const ScoreBoard = ({
resetDices, saveScore  
}) => {
  const {
    turn,
    setTurn,
    setHlScore,
    setGameStarted,
    diceValues,
    setFinalPoints,
    setGameOver,
    aces,
    setAces,
    twos,
    setTwos,
    threes,
    setThrees,
    fours,
    setFours,
    fives,
    setFives,
    sixes,
    setSixes,
    bonusStatus,
    setBonusStatus,
    bonus,
    setBonus,
    yatzy, setYatzy,
    onePair,
    setOnePair,
    twoPairs,
    setTwoPairs,
    threeOfAKind,
    setThreeOfAKind,
    fourOfAKind,
    setFourOfAKind,
    smallStraight,
    setSmallStraight,
    bigStraight,
    setBigStraight,
    fullHouse,
    setFullHouse,
    chance,
    setChance,
    total,
    setTotal,
  } = useContext(AppContext);

  const calcResult = (value) => {
    switch (value) {
      case "Ettor":
        return diceValues.filter((val) => val === 1).length;
      case "Tvåor":
        return diceValues.filter((val) => val === 2).length * 2;
      case "Treor":
        return diceValues.filter((val) => val === 3).length * 3;
      case "Fyror":
        return diceValues.filter((val) => val === 4).length * 4;
      case "Femmor":
        return diceValues.filter((val) => val === 5).length * 5;
      case "Sexor":
        return diceValues.filter((val) => val === 6).length * 6;
      case "Yatzy":
        if (new Set(diceValues).size == 1) {
          return 50;
        } else {
          return 0;
        }
      case "Ett par":
        if (diceValues[0] === diceValues[1]) {
          return diceValues[0] + diceValues[1];
        } else if (diceValues[1] === diceValues[2]) {
          return diceValues[1] + diceValues[2];
        } else if (diceValues[2] === diceValues[3]) {
          return diceValues[2] + diceValues[3];
        } else if (diceValues[3] === diceValues[4]) {
          return diceValues[3] + diceValues[4];
        } else return 0;
      case "Två par":
        if (
          diceValues[0] === diceValues[1] &&
          diceValues[2] === diceValues[3] &&
          diceValues[0] !== diceValues[2]
        ) {
          return diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3];
        } else if (
          diceValues[0] === diceValues[1] &&
          diceValues[3] === diceValues[4] &&
          diceValues[0] !== diceValues[3]
        ) {
          return diceValues[0] + diceValues[1] + diceValues[3] + diceValues[4];
        } else if (
          diceValues[1] === diceValues[2] &&
          diceValues[3] === diceValues[4] &&
          diceValues[1] !== diceValues[3]
        ) {
          return diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
        } else return 0;
      case "Tretal":
        if (
          diceValues[0] === diceValues[1] &&
          diceValues[0] === diceValues[2]
        ) {
          return diceValues[0] + diceValues[1] + diceValues[2];
        } else if (
          diceValues[1] === diceValues[2] &&
          diceValues[1] === diceValues[3]
        ) {
          return diceValues[1] + diceValues[2] + diceValues[3];
        } else if (
          diceValues[2] === diceValues[3] &&
          diceValues[2] === diceValues[4]
        ) {
          return diceValues[2] + diceValues[3] + diceValues[4];
        } else return 0;
      case "Fyrtal":
        if (
          diceValues[0] === diceValues[1] &&
          diceValues[0] === diceValues[2] &&
          diceValues[0] === diceValues[3]
        ) {
          return diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3];
        } else if (
          diceValues[1] === diceValues[2] &&
          diceValues[1] === diceValues[3] &&
          diceValues[1] === diceValues[4]
        ) {
          return diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
        } else return 0;
      case "Liten stege":
        if (
          diceValues[0] === 5 &&
          diceValues[1] === 4 &&
          diceValues[2] === 3 &&
          diceValues[3] === 2 &&
          diceValues[4] === 1
        ) {
          return 15;
        } else return 0;
      case "Stor stege":
        if (
          diceValues[0] === 6 &&
          diceValues[1] === 5 &&
          diceValues[2] === 4 &&
          diceValues[3] === 3 &&
          diceValues[4] === 2
        ) {
          return 20;
        } else return 0;
      case "Kåk":
        if (
          diceValues[0] === diceValues[1] &&
          diceValues[1] === diceValues[2] &&
          diceValues[3] === diceValues[4] &&
          diceValues[0] !== diceValues[4]
        ) {
          return (
            diceValues[0] +
            diceValues[1] +
            diceValues[2] +
            diceValues[3] +
            diceValues[4]
          );
        } else if (
          diceValues[0] === diceValues[1] &&
          diceValues[2] === diceValues[3] &&
          diceValues[3] === diceValues[4] &&
          diceValues[0] !== diceValues[4]
        ) {
          return (
            diceValues[0] +
            diceValues[1] +
            diceValues[2] +
            diceValues[3] +
            diceValues[4]
          );
        } else return 0;
      case "Chans":
        return (
          diceValues[0] +
          diceValues[1] +
          diceValues[2] +
          diceValues[3] +
          diceValues[4]
        );
    }
  };

  useEffect(() => {
    let val = 0;
    if (aces !== null) {
      val = val + aces;
    }
    if (twos !== null) {
      val = val + twos;
    }
    if (threes !== null) {
      val = val + threes;
    }
    if (fours !== null) {
      val = val + fours;
    }
    if (fives !== null) {
      val = val + fives;
    }
    if (sixes !== null) {
      val = val + sixes;
    }
    setBonusStatus(val);
  }, [turn]);

  useEffect(() => {
    if (bonusStatus < 63) {
      setBonus(0);
    } else {
      setBonus(50);
    }
  }, [bonusStatus]);

  useEffect(() => {
    setTotal(
      aces +
        twos +
        threes +
        fours +
        fives +
        sixes +
        bonus +
        yatzy +
        onePair +
        twoPairs +
        threeOfAKind +
        fourOfAKind +
        smallStraight +
        bigStraight +
        fullHouse +
        chance
    );
  }, [turn, bonus]);

  useEffect(() => {
    if (
      aces !== null &&
      twos !== null &&
      threes !== null &&
      fours !== null &&
      fives !== null &&
      sixes !== null &&
      bonus !== null &&
      yatzy !== null &&
      onePair !== null &&
      twoPairs !== null &&
      threeOfAKind !== null &&
      fourOfAKind !== null &&
      smallStraight !== null &&
      bigStraight !== null &&
      fullHouse !== null &&
      chance !== null
    ) {
      console.log("Bonusen blev:", bonus);
      setFinalPoints(
        aces +
          twos +
          threes +
          fours +
          fives +
          sixes +
          bonus +
          yatzy +
          onePair +
          twoPairs +
          threeOfAKind +
          fourOfAKind +
          smallStraight +
          bigStraight +
          fullHouse +
          chance
      );
      saveScore(
        aces +
          twos +
          threes +
          fours +
          fives +
          sixes +
          bonus +
          yatzy +
          onePair +
          twoPairs +
          threeOfAKind +
          fourOfAKind +
          smallStraight +
          bigStraight +
          fullHouse +
          chance
      );
      setGameOver(true);
    }
  }, [turn]);

  return (
    <div className="w-11/12 mx-auto bg-black bg-opacity-30 z-10 mt-4 p-3 grid grid-cols-2 max-w-3xl gap-x-2 gap-y-1 rounded-lg">
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Ettor"}
        bold={false}
        value={aces}
        setValue={setAces}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Ett par"}
        bold={false}
        value={onePair}
        setValue={setOnePair}
        calcResult={calcResult}
      >
        {" "}
      </ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Tvåor"}
        bold={false}
        value={twos}
        setValue={setTwos}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Två par"}
        bold={false}
        value={twoPairs}
        setValue={setTwoPairs}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Treor"}
        bold={false}
        value={threes}
        setValue={setThrees}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Tretal"}
        bold={false}
        value={threeOfAKind}
        setValue={setThreeOfAKind}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Fyror"}
        bold={false}
        value={fours}
        setValue={setFours}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Fyrtal"}
        bold={false}
        value={fourOfAKind}
        setValue={setFourOfAKind}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Femmor"}
        bold={false}
        value={fives}
        setValue={setFives}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Liten stege"}
        bold={false}
        value={smallStraight}
        setValue={setSmallStraight}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Sexor"}
        bold={false}
        value={sixes}
        setValue={setSixes}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Stor stege"}
        bold={false}
        value={bigStraight}
        setValue={setBigStraight}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Summa"}
        bold={true}
        value={bonusStatus}
        setValue={setBonusStatus}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Kåk"}
        bold={false}
        value={fullHouse}
        setValue={setFullHouse}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Bonus"}
        bold={false}
        value={bonus}
        setValue={setBonus}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Chans"}
        bold={false}
        value={chance}
        setValue={setChance}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"Yatzy"}
        bold={false}
        value={yatzy}
        setValue={setYatzy}
        calcResult={calcResult}
      ></ScoreBox>
      <ScoreBox
        setGameStarted={setGameStarted}
        setTurn={setTurn}
        turn={turn}
        setHlScore={setHlScore}
        resetDices={resetDices}
        text={"TOTALT"}
        bold={true}
        value={total}
        setValue={setTotal}
        calcResult={calcResult}
      ></ScoreBox>
    </div>
  );
};

export default ScoreBoard;
