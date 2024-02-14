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

  if (gameResults.length === 0) {
    return (
      <S.Container>
        <h2>기록이 없습니다.</h2>
        <p>게임을 플레이하고 기록을 남겨보세요!</p>

        <S.PlayGameButton>
          <a href="/setting">게임하러 가기</a>
        </S.PlayGameButton>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <ul>
        {gameResults.map((gameResult, index) => (
          <S.ResultItem
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
            <p>
              <span style={{ color: gameResult.player1.color }}>
                {gameResult.player1.mark}
              </span>{" "}
              vs{" "}
              <span style={{ color: gameResult.player2.color }}>
                {gameResult.player2.mark}
              </span>
            </p>
            {timeAgo(gameResult.date)}
          </S.ResultItem>
        ))}
      </ul>
    </S.Container>
  );
};

export default GameResults;
