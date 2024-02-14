import React, { ReactNode, createContext, useContext, useState } from "react";
import { GameSettings, GameSettingsContextType } from "../types/game";
import { PLAYER } from "../utills/constance/gameSetting";

const defaultSettings: GameSettings = {
  boardSize: 3,
  winCondition: 3,
  player1Mark: "X",
  player1Color: PLAYER.COLOR.BLUE,
  player2Mark: "O",
  player2Color: PLAYER.COLOR.RED,
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
