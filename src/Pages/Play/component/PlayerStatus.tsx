import { Player } from "../../../types/game";

import S from "./Style";

interface PlayerStatusProps {
  player: Player;
  className?: string;
  onUndo: (player: Player["mark"]) => void;
}

const PlayerStatus = ({ player, onUndo, ...rest }: PlayerStatusProps) => {
  const { mark, color, undoCount } = player;

  return (
    <S.PlayerStatus className={rest.className}>
      <S.PlayerMark $color={color}>{mark}</S.PlayerMark>
      <p>⎌: {undoCount}</p>
      <S.UndoButton
        onClick={() => {
          onUndo(mark);
        }}
        disabled={undoCount === 0}
      >
        ⎌
      </S.UndoButton>
    </S.PlayerStatus>
  );
};

export default PlayerStatus;
