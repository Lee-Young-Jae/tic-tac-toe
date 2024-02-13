import React, { ReactNode, createContext, useContext, useState } from "react";
import { GameSettings, GameSettingsContextType } from "../types/game";

const defaultSettings: GameSettings = {
  boardSize: 3,
  winCondition: 3,
  player1Mark: "X",
  player1Color: "#0000FF",
  player2Mark: "O",
  player2Color: "#FF0000",
  startingPlayer: "random",
};

export const GameSettingsContext = createContext<GameSettingsContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export const useGameSettings = () => useContext(GameSettingsContext);

export const GameSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<GameSettings>(defaultSettings);

  const updateSettings = (newSettings: GameSettings) => {
    setSettings(newSettings);
  };

  const value = { settings, updateSettings };

  return (
    <GameSettingsContext.Provider value={value}>
      {children}
    </GameSettingsContext.Provider>
  );
};
