import { useContext } from "react";
import { GameSettingsContext } from "../../../context/GameSettingsContext";
import { PlayerMark } from "../../../types/game";

interface SettingPlayerProps {
  currentPlayer: "player1" | "player2";
}

const SettingPlayer = ({ currentPlayer }: SettingPlayerProps) => {
  const { settings, updateSettings } = useContext(GameSettingsContext);

  const onChangePlayerMark = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({
      ...settings,
      [`${currentPlayer}Mark`]: e.target.value as PlayerMark,
    });
  };

  const onChangePlayerColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({
      ...settings,
      [`${currentPlayer}Color`]: e.target.value,
    });
  };

  return (
    <div>
      <label>
        Mark
        <select
          value={settings[`${currentPlayer}Mark`]}
          onChange={onChangePlayerMark}
        >
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
      </label>
      <label>
        Color
        <input
          type="color"
          value={settings[`${currentPlayer}Color`]}
          onChange={onChangePlayerColor}
        />
      </label>
    </div>
  );
};

export default SettingPlayer;
