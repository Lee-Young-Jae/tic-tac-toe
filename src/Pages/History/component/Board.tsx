import Cell from "./Cell";
import { GameState } from "../../../types/game";
import S from "./Style";

interface BoardProps {
  board: GameState["board"];
  displayStep: Boolean;
}

const Board = ({ board, displayStep }: BoardProps) => {
  return (
    <div>
      {board.map((row, y) => (
        <S.Row key={y}>
          {row.map((cell, x) => (
            <Cell key={x} value={cell} displayStep={displayStep} />
          ))}
        </S.Row>
      ))}
    </div>
  );
};

export default Board;
