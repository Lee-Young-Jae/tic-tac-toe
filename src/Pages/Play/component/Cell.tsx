import { GameState } from "../../../types/game";
import S from "./Style";

interface CellProps {
  value: GameState["board"][0][0];
  onClick: () => void;
}

const Cell = (props: CellProps) => {
  const { value, onClick } = props;

  return (
    <S.Cell className="cell" onClick={onClick}>
      {value}
    </S.Cell>
  );
};

export default Cell;
