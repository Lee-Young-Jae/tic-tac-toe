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

type Cell = { mark: PlayerMark | null; color: string | null };
type Board = Cell[][];
type GameStatus = "inProgress" | "player1Won" | "player2Won" | "draw";
type record = {
  postion: { x: number; y: number };
  player: PlayerMark;
};
type recordList = record[];
export type GameState = {
  board: Board;
  status: GameStatus;
  currentPlayer: PlayerMark;
  records: recordList;
};
