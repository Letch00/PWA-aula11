/* import React, {useMemo, useState} from "react";
import { TabContext } from "./TabContext";

export const TabProvider = ({children}) =>{
    const [games,setGames] = useState([]);

    const value = useMemo(
        () => ({setGames, countGames: games.length}),
        [games] 
    );

    return (
        <TabContext.Provider value={value}>
            {children}
        </TabContext.Provider>
    )
} */
import React, { useState, useMemo } from "react";
import { TabContext } from "./TabContext";

export const TabProvider = ({ children }) => {
  const [countGames, setGamesCount] = useState([]);
  const [countClicks, setClicksCount] = useState(1);

  const value = useMemo(
    () => ({
      setGamesCount,
      countGames: countGames,
      setClicksCount,
      countClicks: countClicks,
    }),
    [countGames, countClicks]
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};