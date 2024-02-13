import { useContext } from "react";
import { GameSettingsContext } from "../../context/GameSettingsContext";
import { GAME_RULES } from "../../utills/constance/gameSetting";
import SettingPlayer from "./component/SettingPlayer";

import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const { settings, updateSettings } = useContext(GameSettingsContext);

  const onChangeBoardSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, boardSize: parseInt(e.target.value) });
  };

  const onChangeWinCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, winCondition: parseInt(e.target.value) });
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
    <div>
      <h1>Setting</h1>
      <div>
        <label>
          Board Size
          <input
            type="number"
            max={GAME_RULES.MAX_BOARD_SIZE}
            min={GAME_RULES.MIN_BOARD_SIZE}
            value={settings.boardSize}
            onChange={onChangeBoardSize}
          />
        </label>
      </div>
      <div>
        <label>
          Win Condition
          <input
            type="number"
            max={GAME_RULES.MAX_WIN_CONDITION}
            min={GAME_RULES.MIN_WIN_CONDITION}
            value={settings.winCondition}
            onChange={onChangeWinCondition}
          />
        </label>
      </div>
      <SettingPlayer currentPlayer="player1"></SettingPlayer>
      <SettingPlayer currentPlayer="player2"></SettingPlayer>

      <div>
        <label>
          Starting Player
          <select
            value={settings.startingPlayer}
            onChange={onChangeStartingPlayer}
          >
            <option value="player1">Player 1</option>
            <option value="player2">Player 2</option>
            <option value="random">Random</option>
          </select>
        </label>
      </div>

      <button onClick={onClickGameStart}>GameStart!</button>
    </div>
  );
};

export default Setting;
