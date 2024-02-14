import Cell from "./Cell";
import { GameState } from "../../../types/game";
import S from "./Style";

interface BoardProps {
  board: GameState["board"];
  onClick: (x: number, y: number) => void;
}

const Board = ({ board, onClick }: BoardProps) => {
  return (
    <div>
      {board.map((row, y) => (
        <S.Row key={y}>
          {row.map((cell, x) => (
            <Cell key={x} value={cell} onClick={() => onClick(x, y)} />
          ))}
        </S.Row>
      ))}
    </div>
  );
};

export default Board;
