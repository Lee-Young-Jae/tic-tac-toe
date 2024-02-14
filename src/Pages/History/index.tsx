import { useEffect, useState } from "react";
import { GameResult as GameResultType } from "../../types/game";
import { useNavigate } from "react-router-dom";
import S from "./Style";
import GameResults from "./component/GameResults";

const History = () => {
  const [gameResults, setGameResults] = useState<GameResultType[]>([]);

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
      <GameResults gameResults={gameResults}></GameResults>
    </S.Container>
  );
};

export default History;
