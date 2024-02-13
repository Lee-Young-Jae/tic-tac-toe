import { useContext, useState } from "react";
import { GameSettingsContext } from "../../context/GameSettingsContext";
import { GameState } from "../../types/game";
import Board from "./component/Board";
import S from "./Style";

const Play = () => {
  const { settings, updateSettings } = useContext(GameSettingsContext);

  const [board, setBoard] = useState<GameState["board"]>(
    Array.from({ length: settings.boardSize }, () =>
      Array(settings.boardSize).fill(null)
    )
  );

  const generateRandomPlayer = () =>
    Math.random() > 0.5 ? settings.player1Mark : settings.player2Mark;

  const [turn, setTurn] = useState<GameState["currentPlayer"]>(
    settings.startingPlayer === "random"
      ? generateRandomPlayer()
      : settings.startingPlayer === "player1"
      ? settings.player1Mark
      : settings.player2Mark
  );

  const onClickCell = (x: number, y: number) => {
    const newBoard = [...board];
    newBoard[y][x] = turn;
    setTurn(
      turn === settings.player1Mark
        ? settings.player2Mark
        : settings.player1Mark
    );
    setBoard(newBoard);
  };

  return (
    <S.Container>
      <h1>Play</h1>
      <Board board={board} onClick={onClickCell}></Board>
    </S.Container>
  );
};

export default Play;
