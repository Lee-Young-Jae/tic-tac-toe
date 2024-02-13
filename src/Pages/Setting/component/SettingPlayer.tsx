import { useContext } from "react";
import { GameSettingsContext } from "../../../context/GameSettingsContext";
import { PlayerMark } from "../../../types/game";
import { PLAYER } from "../../../utills/constance/gameSetting";

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
          {PLAYER.MARK.map((mark) => (
            <option key={mark} value={mark}>
              {mark}
            </option>
          ))}
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
