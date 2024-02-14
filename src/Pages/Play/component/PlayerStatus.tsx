import { Player } from "../../../types/game";

import S from "./Style";

interface PlayerStatusProps {
  player: Player;
  className?: string;
}

const PlayerStatus = ({ player, ...rest }: PlayerStatusProps) => {
  const { mark, color, undoCount } = player;

  return (
    <S.PlayerStatus className={rest.className}>
      <S.PlayerMark $color={color}>{mark}</S.PlayerMark>
      <p>⎌: {undoCount}</p>
    </S.PlayerStatus>
  );
};

export default PlayerStatus;
