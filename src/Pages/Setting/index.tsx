import { useContext } from "react";
import { GameSettingsContext } from "../../context/GameSettingsContext";
import GAME_RULES from "../../utills/constance/gameSetting";

const Setting = () => {
  const { settings, updateSettings } = useContext(GameSettingsContext);

  const onChangeBoardSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, boardSize: parseInt(e.target.value) });
  };

  const onChangeWinCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, winCondition: parseInt(e.target.value) });
  };

  const onChangePlayer1Mark = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ ...settings, player1Mark: e.target.value as "X" | "O" });
  };

  const onChangePlayer1Color = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, player1Color: e.target.value });
  };

  const onChangePlayer2Mark = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ ...settings, player2Mark: e.target.value as "X" | "O" });
  };

  const onChangePlayer2Color = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, player2Color: e.target.value });
  };

  const onChangeStartingPlayer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({
      ...settings,
      startingPlayer: e.target.value as "player1" | "player2" | "random",
    });
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
      <div>
        <label>
          Player 1 Mark
          <select value={settings.player1Mark} onChange={onChangePlayer1Mark}>
            <option value="X">X</option>
            <option value="O">O</option>
            <option value="■">■</option>
            <option value="▲">▲</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Player 1 Color
          <input
            type="color"
            value={settings.player1Color}
            onChange={onChangePlayer1Color}
          />
        </label>
      </div>
      <div>
        <label>
          Player 2 Mark
          <select value={settings.player2Mark} onChange={onChangePlayer2Mark}>
            <option value="X">X</option>
            <option value="O">O</option>
            <option value="■">■</option>
            <option value="▲">▲</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Player 2 Color
          <input
            type="color"
            value={settings.player2Color}
            onChange={onChangePlayer2Color}
          />
        </label>
      </div>
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
    </div>
  );
};

export default Setting;
