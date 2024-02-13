import { useContext } from "react";
import { GameSettingsContext } from "../../context/GameSettingsContext";
import SettingPlayer from "./component/SettingPlayer";

import { useNavigate } from "react-router-dom";

import S from "./Style";

const Setting = () => {
  const navigate = useNavigate();
  const { settings, updateSettings } = useContext(GameSettingsContext);

  const onChangeBoardSize = (size: number) => {
    if (settings.winCondition > size) {
      updateSettings({ ...settings, winCondition: size, boardSize: size });
      return;
    }
    updateSettings({
      ...settings,
      boardSize: size,
    });
  };

  const onChangeWinCondition = (e: React.MouseEvent<HTMLButtonElement>) => {
    updateSettings({
      ...settings,
      winCondition: parseInt(e.currentTarget.value),
    });
  };

  const onChangeStartingPlayer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({
      ...settings,
      startingPlayer: e.target.value as "player1" | "player2" | "random",
    });
  };

  const onClickGameStart = () => {
    navigate("/play");
  };

  return (
    <S.Container>
      <S.SettingBoardSize>
        <S.Label>얼마나 큰 게임판을 생성할까요?</S.Label>
        <S.BoardSizeButton
          onClick={() => onChangeBoardSize(3)}
          className={settings.boardSize === 3 ? "active" : ""}
        >
          3X3
        </S.BoardSizeButton>
        <S.BoardSizeButton
          onClick={() => onChangeBoardSize(4)}
          className={settings.boardSize === 4 ? "active" : ""}
        >
          4X4
        </S.BoardSizeButton>
        <S.BoardSizeButton
          onClick={() => onChangeBoardSize(5)}
          className={settings.boardSize === 5 ? "active" : ""}
        >
          5X5
        </S.BoardSizeButton>
      </S.SettingBoardSize>

      <S.SettingWinCondition>
        <S.Label>몇 개의 돌을 연달아 놓으면 승리할까요?</S.Label>
        {new Array(3).fill(0).map((_, index) => (
          <S.WinConditionButton
            key={index}
            value={index + 3}
            disabled={index + 3 > settings.boardSize}
            className={
              settings.winCondition === index + 3 ? "active" : undefined
            }
            onClick={onChangeWinCondition}
          >
            {index + 3}
          </S.WinConditionButton>
        ))}
      </S.SettingWinCondition>

      <S.SettingPlayer>
        <S.Label>플레이어 정보를 입력해주세요.</S.Label>
        <S.Players>
          <SettingPlayer currentPlayer="player1"></SettingPlayer>
          <SettingPlayer currentPlayer="player2"></SettingPlayer>
        </S.Players>
      </S.SettingPlayer>

      <S.SettingPlayer>
        <S.Label>누가 먼저 시작할까요?</S.Label>
        <S.Select
          value={settings.startingPlayer}
          onChange={onChangeStartingPlayer}
        >
          <S.Option value="player1">Player 1</S.Option>
          <S.Option value="player2">Player 2</S.Option>
          <S.Option value="random">Random</S.Option>
        </S.Select>
      </S.SettingPlayer>

      <S.GameStartButton onClick={onClickGameStart}>
        GameStart!
      </S.GameStartButton>
    </S.Container>
  );
};

export default Setting;
