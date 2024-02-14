import { GameState } from "../../types/game";

export const checkWin = (
  board: GameState["board"],
  player: string,
  winCondition: number
) => {
  const boardSize = board.length;

  // row확인
  for (let y = 0; y < boardSize; y++) {
    let count = 0;
    for (let x = 0; x < boardSize; x++) {
      if (board[y][x]?.mark === player) {
        count++;
        if (count === winCondition) {
          return true;
        }
      } else {
        count = 0;
      }
    }
  }

  // column 확인
  for (let x = 0; x < boardSize; x++) {
    let count = 0;
    for (let y = 0; y < boardSize; y++) {
      if (board[y][x]?.mark === player) {
        count++;
        if (count === winCondition) {
          return true;
        }
      } else {
        count = 0;
      }
    }
  }

  // 대각선 확인
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      let count = 0;
      for (let i = 0; i < winCondition; i++) {
        if (y + i < boardSize && x + i < boardSize) {
          if (board[y + i][x + i]?.mark === player) {
            count++;
            if (count === winCondition) {
              return true;
            }
          } else {
            count = 0;
          }
        }
      }
    }
  }

  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      let count = 0;
      for (let i = 0; i < winCondition; i++) {
        if (y + i < boardSize && x - i >= 0) {
          if (board[y + i][x - i]?.mark === player) {
            count++;
            if (count === winCondition) {
              return true;
            }
          } else {
            count = 0;
          }
        }
      }
    }
  }

  return false;
};

export const checkDraw = (board: GameState["board"]) => {
  return board.every((row) => row.every((cell) => cell));
};

export const generateInitialBoard = (size: number) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null)
  );
};
