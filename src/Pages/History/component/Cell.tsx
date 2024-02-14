import { GameState } from "../../../types/game";
import S from "./Style";

interface CellProps {
  value: GameState["board"][0][0];
}

const Cell = (props: CellProps) => {
  const { value } = props;

  if (!value) {
    return <S.Cell className="cell" />;
  }
  return (
    <S.Cell className="cell" $color={value?.color}>
      {value?.mark}
    </S.Cell>
  );
};

export default Cell;
