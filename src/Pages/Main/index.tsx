import { useNavigate } from "react-router-dom";
import S from "./Style";

const Main = () => {
  const navigate = useNavigate();

  const onClickStart = () => {
    navigate("/setting");
  };

  const onClickHistory = () => {
    navigate("/history");
  };

  return (
    <S.Container>
      <S.Title>TicTacToe</S.Title>
      <S.Navigater>
        <button onClick={onClickStart}>게임 시작</button>
        <button onClick={onClickHistory}>기록된 게임 보기</button>
      </S.Navigater>
    </S.Container>
  );
};

export default Main;
