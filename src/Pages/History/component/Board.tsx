import Cell from "./Cell";
import { GameState } from "../../../types/game";
import S from "./Style";

interface BoardProps {
  board: GameState["board"];
}

const Board = ({ board }: BoardProps) => {
  return (
    <div>
      {board.map((row, y) => (
        <S.Row key={y}>
          {row.map((cell, x) => (
            <Cell key={x} value={cell} />
          ))}
        </S.Row>
      ))}
    </div>
  );
};

export default Board;
