export type PlayerMark = "■" | "▲" | "X" | "O";
export type GameSettings = {
  boardSize: number;
  winCondition: number;
  player1Mark: PlayerMark;
  player1Color: string;
  player2Mark: PlayerMark;
  player2Color: string;
  startingPlayer: "player1" | "player2" | "random";
};

export type GameSettingsContextType = {
  settings: GameSettings;
  updateSettings: (newSettings: GameSettings) => void;
};
