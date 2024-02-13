import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const onClickStart = () => {
    navigate("/setting");
  };

  const onClickHistory = () => {
    navigate("/history");
  };

  return (
    <div>
      <h1>TicTacToe</h1>
      <button onClick={onClickStart}>게임 시작</button>
      <button onClick={onClickHistory}>기록된 게임 보기</button>
    </div>
  );
};

export default Main;
