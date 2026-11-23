/* import React from "react";

const context = {
    setGames: () => { },
    countGames: () => { }
};

export const TabContext = React.createContext(context) */
import React from "react";

const context = {
  setGamesCount: () => {},
  countGames: () => {},
  setClicksCount: () => {},
  countClicks: () => {},
};

export const TabContext = React.createContext(context);