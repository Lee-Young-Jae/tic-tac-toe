import { GameState } from "../../../types/game";
import S from "./Style";

interface CellProps {
  value: GameState["board"][0][0];
  onClick: () => void;
}

const Cell = (props: CellProps) => {
  const { value, onClick } = props;

  if (!value) {
    return <S.Cell className="cell" onClick={onClick} />;
  }
  return (
    <S.Cell className="cell" $color={value?.color}>
      {value?.mark}
    </S.Cell>
  );
};

export default Cell;
