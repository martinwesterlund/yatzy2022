module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "ping-fast": "ping 0.2s linear 3",
        spinBig: "spinBig 5s  infinite",
      },
      colors: {
        yatzyBlue: "#010054",
        yatzyBlueDark: "#29366b",
        yatzyYellow: "#ff9500",
        yatzyRed: "#9e0000",
      },
      boxShadow: {
        dice: "5px 5px 15px 5px #000000",
      },
    },
    fontFamily: {
      // 'nautigal' : ['The Nautigal', 'cursive'],
      rowdies: ["Rowdies", "cursive"],
      galindo: ["Galindo"],
      oleo: ["Oleo Script Swash Caps", "cursive"],
      bebas: ["Bebas Neue"],
      hanna: ["Raleway", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
