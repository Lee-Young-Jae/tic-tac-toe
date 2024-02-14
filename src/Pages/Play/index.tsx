import { useContext, useState } from "react";
import { GameSettingsContext } from "../../context/GameSettingsContext";
import { GameState } from "../../types/game";
import Board from "./component/Board";
import S from "./Style";
import { checkWin } from "../../utills/gameControl/gameControl";

import { useNavigate } from "react-router-dom";
import PlayerStatus from "./component/PlayerStatus";

const Play = () => {
  const { settings } = useContext(GameSettingsContext);

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
    newBoard[y][x] = {
      mark: turn,
      color:
        turn === settings.player1Mark
          ? settings.player1Color
          : settings.player2Color,
    };
    checkWin(newBoard, turn, settings.winCondition);

    setTurn(
      turn === settings.player1Mark
        ? settings.player2Mark
        : settings.player1Mark
    );
    setBoard(newBoard);
  };

  const navigate = useNavigate();

  const onClickMain = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <PlayerStatus
        className={turn === settings.player1Mark ? "active" : ""}
        player={{
          mark: settings.player1Mark,
          color: settings.player1Color,
          undoCount: 3,
        }}
      ></PlayerStatus>
      <PlayerStatus
        className={turn === settings.player2Mark ? "active" : ""}
        player={{
          mark: settings.player2Mark,
          color: settings.player2Color,
          undoCount: 3,
        }}
      ></PlayerStatus>
      <Board board={board} onClick={onClickCell}></Board>
      <S.MainButton onClick={onClickMain}>Main</S.MainButton>
    </S.Container>
  );
};

export default Play;
