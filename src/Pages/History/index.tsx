import { useEffect, useState } from "react";
import { GameResult as GameResultType } from "../../types/game";
import { useNavigate } from "react-router-dom";
import S from "./Style";
import { timeAgo } from "../../utills";
import { useModal } from "../../hooks/useModal";
import GameResultModal from "./component/GameResultModal";

const History = () => {
  const [gameResults, setGameResults] = useState<GameResultType[]>([]);
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    const gameResults = JSON.parse(localStorage.getItem("gameResults") || "[]");
    setGameResults(gameResults);
  }, []);

  const navigate = useNavigate();

  const onClickMain = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.MainButton onClick={onClickMain}>메인으로</S.MainButton>
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

export default History;
