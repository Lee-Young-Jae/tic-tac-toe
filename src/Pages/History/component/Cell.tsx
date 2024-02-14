import { GameState } from "../../../types/game";
import S from "./Style";

interface CellProps {
  value: GameState["board"][0][0];
  displayStep: Boolean;
}

const Cell = (props: CellProps) => {
  const { value, displayStep } = props;

  if (!value) {
    return <S.Cell className="cell" />;
  }
  return (
    <S.Cell className="cell" $color={value?.color}>
      {value?.mark}
      {displayStep && <span>{value?.sequence}</span>}
    </S.Cell>
  );
};

export default Cell;
