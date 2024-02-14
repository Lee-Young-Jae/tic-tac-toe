import { useContext, useState } from "react";
import { GameSettingsContext } from "../../context/GameSettingsContext";
import { GameState, PlayerMark } from "../../types/game";
import Board from "./component/Board";
import S from "./Style";
import { checkWin } from "../../utills/gameControl/gameControl";

import { useNavigate } from "react-router-dom";
import PlayerStatus from "./component/PlayerStatus";
import { useModal } from "../../hooks/useModal";
import Modal from "../../Components/Modal";

const Play = () => {
  const { settings } = useContext(GameSettingsContext);

  const [board, setBoard] = useState<GameState["board"]>(
    Array.from({ length: settings.boardSize }, () =>
      Array(settings.boardSize).fill(null)
    )
  );
  const [gameStatus, setGameStatus] =
    useState<GameState["gameStatus"]>("inProgress");

  const [records, setRecords] = useState<GameState["records"]>([]);
  const [undoCount, setUndoCount] = useState({
    [settings.player1Mark]: 3,
    [settings.player2Mark]: 3,
  });

  const generateRandomPlayer = () =>
    Math.random() > 0.5 ? settings.player1Mark : settings.player2Mark;

  const [turn, setTurn] = useState<GameState["currentPlayer"]>(
    settings.startingPlayer === "random"
      ? generateRandomPlayer()
      : settings.startingPlayer === "player1"
      ? settings.player1Mark
      : settings.player2Mark
  );

  const { openModal, closeModal } = useModal();
  const onClickCell = (x: number, y: number) => {
    if (gameStatus !== "inProgress") return;
    const newBoard = [...board];
    newBoard[y][x] = {
      mark: turn,
      color:
        turn === settings.player1Mark
          ? settings.player1Color
          : settings.player2Color,
    };

    setRecords([...records, { postion: { x, y }, player: turn }]);
    if (checkWin(newBoard, turn, settings.winCondition)) {
      setGameStatus(
        turn === settings.player1Mark ? "player1Won" : "player2Won"
      );
      openModal(
        <Modal
          header={<p>{turn}님의 승리!</p>}
          footer={
            <>
              <button onClick={closeModal}>다시 시작하기</button>
              <button>게임 결과 기록하기</button>
            </>
          }
        >
          <p>축하합니다!</p>
        </Modal>
      );
      setBoard(newBoard);
      return;
    }

    setTurn(
      turn === settings.player1Mark
        ? settings.player2Mark
        : settings.player1Mark
    );
    setBoard(newBoard);
  };

  const onUndo = (playerMark: PlayerMark) => {
    if (undoCount[playerMark] === 0) return;
    if (gameStatus !== "inProgress") return;
    const newRecords = [...records];
    const lastRecord = newRecords.pop();
    if (!lastRecord) return;
    const newBoard = [...board];
    newBoard[lastRecord.postion.y][lastRecord.postion.x] = null;
    setRecords(newRecords);
    setBoard(newBoard);
    const beforeTurn =
      turn === settings.player1Mark
        ? settings.player2Mark
        : settings.player1Mark;
    setTurn(beforeTurn);
    setUndoCount({ ...undoCount, [playerMark]: undoCount[playerMark] - 1 });
  };

  const navigate = useNavigate();
  const onClickMain = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.PlayerStatusSection>
        <PlayerStatus
          onUndo={onUndo}
          className={turn === settings.player1Mark ? "active" : ""}
          player={{
            mark: settings.player1Mark,
            color: settings.player1Color,
            undoCount: undoCount[settings.player1Mark],
          }}
        ></PlayerStatus>
        <PlayerStatus
          onUndo={onUndo}
          className={turn === settings.player2Mark ? "active" : ""}
          player={{
            mark: settings.player2Mark,
            color: settings.player2Color,
            undoCount: undoCount[settings.player2Mark],
          }}
        ></PlayerStatus>
      </S.PlayerStatusSection>
      <Board board={board} onClick={onClickCell} />
      <S.MainButton onClick={onClickMain}>Main</S.MainButton>
    </S.Container>
  );
};

export default Play;
