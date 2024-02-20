import { useState, useCallback } from "react";
import { generateInitialBoard } from "../utills/gameControl/gameControl";
import { GAME_RULES } from "../utills/constance/gameSetting";
import { GameSettings, GameState, GameStatus } from "../types/game";

export const useGame = (settings: GameSettings) => {
  const [board, setBoard] = useState<GameState["board"]>([]);
  const [gameStatus, setGameStatus] = useState<GameState["status"]>(
    GameStatus.InProgress
  );

  const [records, setRecords] = useState<GameState["records"]>([]);
  const [undoCount, setUndoCount] = useState({
    [settings.player1Mark]: GAME_RULES.UNDO_COUNT,
    [settings.player2Mark]: GAME_RULES.UNDO_COUNT,
  });
  const generateRandomPlayer = useCallback(
    () => (Math.random() > 0.5 ? settings.player1Mark : settings.player2Mark),
    [settings]
  );
  const [turn, setTurn] = useState<GameState["currentPlayer"]>(
    settings.startingPlayer === "random"
      ? generateRandomPlayer()
      : settings.startingPlayer === "player1"
      ? settings.player1Mark
      : settings.player2Mark
  );

  const initializeGameState = useCallback(() => {
    setBoard(generateInitialBoard(settings.boardSize));
    setGameStatus(GameStatus.InProgress);
    setRecords([]);
    setUndoCount({
      [settings.player1Mark]: GAME_RULES.UNDO_COUNT,
      [settings.player2Mark]: GAME_RULES.UNDO_COUNT,
    });
    setTurn(
      settings.startingPlayer === "random"
        ? generateRandomPlayer()
        : settings.startingPlayer === "player1"
        ? settings.player1Mark
        : settings.player2Mark
    );
  }, [settings, generateRandomPlayer]);

  return {
    board,
    setBoard,
    gameStatus,
    setGameStatus,
    records,
    setRecords,
    undoCount,
    setUndoCount,
    turn,
    setTurn,
    initializeGameState,
  };
};
