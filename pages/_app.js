import "../styles/globals.css";
import AppContext from "../AppContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hlScore, setHlScore] = useState();
  const [isYatzy, setIsYatzy] = useState(false);
  const [turn, setTurn] = useState(0);
  const [diceValues, setDiceValues] = useState();
  const [highScore, setHighScore] = useState([]);

  const [aces, setAces] = useState(null);
  const [twos, setTwos] = useState(null);
  const [threes, setThrees] = useState(null);
  const [fours, setFours] = useState(null);
  const [fives, setFives] = useState(null);
  const [sixes, setSixes] = useState(null);
  const [bonusStatus, setBonusStatus] = useState(0);
  const [bonus, setBonus] = useState(null);
  const [yatzy, setYatzy] = useState(null);
  const [onePair, setOnePair] = useState(null);
  const [twoPairs, setTwoPairs] = useState(null);
  const [threeOfAKind, setThreeOfAKind] = useState(null);
  const [fourOfAKind, setFourOfAKind] = useState(null);
  const [smallStraight, setSmallStraight] = useState(null);
  const [bigStraight, setBigStraight] = useState(null);
  const [fullHouse, setFullHouse] = useState(null);
  const [chance, setChance] = useState(null);
  const [total, setTotal] = useState(0);

  const resetHighScore = () => {
    setHighScore([]);
    localStorage.setItem("yatzy2022", JSON.stringify([]));
  };

  const startNewGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setMenuOpen(false);
    setTurn(0);
    setHlScore(null)
    setDiceValues(null)
    setAces(null)
    setTwos(null)
    setThrees(null)
    setFours(null)
    setFives(null)
    setSixes(null)
    setBonusStatus(0)
    setBonus(null)
    setYatzy(null)
    setOnePair(null)
    setTwoPairs(null)
    setThreeOfAKind(null)
    setFourOfAKind(null)
    setSmallStraight(null)
    setBigStraight(null)
    setFullHouse(null)
    setChance(null)
    setTotal(0)
  };

  return (
    <AppContext.Provider
      value={{
        gameStarted,
        setGameStarted,
        gameOver,
        setGameOver,
        menuOpen,
        setMenuOpen,
        hlScore,
        setHlScore,
        isYatzy,
        setIsYatzy,
        turn,
        setTurn,
        diceValues,
        setDiceValues,
        highScore,
        setHighScore,
        resetHighScore,
        startNewGame,
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
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
