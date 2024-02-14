import { useState } from "react";
import {
  GameResult as GameResultType,
  GameState,
} from "../../../../types/game";
import Board from "../Board";
import S from "./Style";

interface GameResultProps {
  gameResult: GameResultType;
}

const GameResult = ({ gameResult }: GameResultProps) => {
  const { date, player1, player2, status } = gameResult;

  const [board, setBoard] = useState<GameState["board"]>(gameResult.board);

  const [step, setStep] = useState(gameResult.records.length);

  const handleStep = (step: number) => {
    if (step < 0 || step > gameResult.records.length) return;
    const newBoard: GameState["board"] = Array.from(
      { length: gameResult.board.length },
      () => Array.from({ length: gameResult.board.length }, () => null)
    );

    setStep(step);
    setBoard(
      gameResult.records.slice(0, step).reduce((acc, record) => {
        const { x, y } = record.postion;
        const currentPlayer = record.player;
        const currentColor =
          currentPlayer === player1.mark ? player1.color : player2.color;
        acc[y][x] = { mark: currentPlayer, color: currentColor };
        return acc;
      }, newBoard)
    );
  };

  return (
    <>
      <S.GameNavigater>
        <button onClick={() => handleStep(0)}>{`<<`}</button>
        <button onClick={() => handleStep(step - 1)}>이전</button>
        <button onClick={() => handleStep(step + 1)}>다음</button>
        <button onClick={() => handleStep(gameResult.records.length)}>
          {`>>`}
        </button>
      </S.GameNavigater>
      <Board board={board} />
      <div>
        <p>상태: {status}</p>
        <p>날짜: {date}</p>
        <p style={{ color: player1.color }}>player1: {player1.mark}</p>
        <p style={{ color: player2.color }}>player2: {player2.mark}</p>
      </div>
    </>
  );
};

export default GameResult;
