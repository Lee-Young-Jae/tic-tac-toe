import { useCallback, useContext, useEffect, useState } from "react";
import { GameSettingsContext } from "../../context/GameSettingsContext";
import { GameResult, GameState, PlayerMark } from "../../types/game";
import Board from "./component/Board";
import S from "./Style";
import { checkDraw, checkWin } from "../../utills/gameControl/gameControl";

import { useNavigate } from "react-router-dom";
import PlayerStatus from "./component/PlayerStatus";
import { useModal } from "../../hooks/useModal";
import Modal from "../../Components/Modal";

const Play = () => {
  const navigate = useNavigate();
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

  const openGameResultModal = (
    header: React.ReactNode,
    content: React.ReactNode
  ) => {
    openModal(
      <Modal
        header={header}
        footer={
          <>
            <S.ModalButton
              onClick={() => {
                onGameRestart();
                closeModal();
              }}
            >
              다시 시작하기
            </S.ModalButton>
            <S.ModalButton
              onClick={() => {
                closeModal();
                navigate("/history");
              }}
            >
              게임 결과 확인하기
            </S.ModalButton>
          </>
        }
      >
        {content}
      </Modal>
    );
  };

  const onGameRestart = () => {
    setBoard(
      Array.from({ length: settings.boardSize }, () =>
        Array(settings.boardSize).fill(null)
      )
    );
    setGameStatus("inProgress");
    setRecords([]);
    setUndoCount({
      [settings.player1Mark]: 3,
      [settings.player2Mark]: 3,
    });
    setTurn(
      settings.startingPlayer === "random"
        ? generateRandomPlayer()
        : settings.startingPlayer === "player1"
        ? settings.player1Mark
        : settings.player2Mark
    );
  };

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
      const winner = turn === settings.player1Mark ? "player1" : "player2";
      setGameStatus(winner === "player1" ? "player1Won" : "player2Won");
      openGameResultModal(
        <p>🙌 축하합니다!</p>,
        <p>
          {`${winner}님의 승리! ${settings.winCondition}개의 ${turn}을
          연결하셨습니다.`}
        </p>
      );
    }

    if (checkDraw(newBoard)) {
      setGameStatus("draw");
      openGameResultModal(
        <p>무승부!</p>,
        <p>치열한 승부였네요 우열을 가릴 수 없어요.</p>
      );
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

  const onClickMain = () => {
    navigate("/");
  };

  const addGameResultLocalStorage = useCallback(() => {
    const gameResult: GameResult = {
      date: new Date().toISOString(),
      status: gameStatus,
      winCondition: settings.winCondition,
      boardSize: settings.boardSize,
      player1: {
        mark: settings.player1Mark,
        color: settings.player1Color,
        undoCount: undoCount[settings.player1Mark],
      },
      player2: {
        mark: settings.player2Mark,
        color: settings.player2Color,
        undoCount: undoCount[settings.player2Mark],
      },
      records,
    };
    const gameResults = JSON.parse(localStorage.getItem("gameResults") || "[]");
    localStorage.setItem(
      "gameResults",
      JSON.stringify([gameResult, ...gameResults])
    );
  }, [
    gameStatus,
    records,
    settings.boardSize,
    settings.player1Color,
    settings.player1Mark,
    settings.player2Color,
    settings.player2Mark,
    settings.winCondition,
    undoCount,
  ]);

  useEffect(() => {
    if (gameStatus === "inProgress") return;
    addGameResultLocalStorage();
  }, [gameStatus, addGameResultLocalStorage]);

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
      {gameStatus !== "inProgress" && (
        <S.RestartButton onClick={onGameRestart}>Restart</S.RestartButton>
      )}
    </S.Container>
  );
};

export default Play;
