import { timeAgo } from "../../../../utills";
import { useModal } from "../../../../hooks/useModal";
import GameResultModal from "../GameResultModal";
import S from "./Style";
import { GameResult as GameResultType } from "../../../../types/game";

interface GameResultsProps {
  gameResults: GameResultType[];
}

const GameResults = ({ gameResults }: GameResultsProps) => {
  const { openModal, closeModal } = useModal();

  return (
    <S.Container>
      <ul>
        {gameResults.map((gameResult, index) => (
          <li
            key={index}
            onClick={() => {
              openModal(
                <GameResultModal
                  gameResult={gameResult}
                  closeModal={closeModal}
                />
              );
            }}
          >
            {gameResult.player1.mark} vs {gameResult.player2.mark}
            {timeAgo(gameResult.date)}
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default GameResults;
