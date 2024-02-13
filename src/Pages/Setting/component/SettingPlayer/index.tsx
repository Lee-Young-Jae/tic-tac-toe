import { useContext } from "react";
import { GameSettingsContext } from "../../../../context/GameSettingsContext";
import { PlayerMark } from "../../../../types/game";
import { PLAYER } from "../../../../utills/constance/gameSetting";

import { Container, Label, Select, Input, PlayerName } from "./Style";

interface SettingPlayerProps {
  currentPlayer: "player1" | "player2";
}

const SettingPlayer = ({ currentPlayer }: SettingPlayerProps) => {
  const { settings, updateSettings } = useContext(GameSettingsContext);

  const onChangePlayerMark = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const otherPlayer = currentPlayer === "player1" ? "player2" : "player1";

    if (e.target.value === settings[`${otherPlayer}Mark`]) {
      alert("다른 플레이어와 중복된 마크를 사용할 수 없습니다.");
      return;
    }

    updateSettings({
      ...settings,
      [`${currentPlayer}Mark`]: e.target.value as PlayerMark,
    });
  };

  const isColorCloseToWhite = (color: string) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    return r > 210 && g > 210 && b > 210;
  };

  const onChangePlayerColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isColorCloseToWhite(e.target.value)) {
      alert("배경색과 너무 유사한 색상은 사용할 수 없습니다.");
      return;
    }

    if (
      e.target.value ===
      settings[`${currentPlayer === "player1" ? "player2" : "player1"}Color`]
    ) {
      alert("다른 플레이어와 중복된 색상을 사용할 수 없습니다.");
      return;
    }

    updateSettings({
      ...settings,
      [`${currentPlayer}Color`]: e.target.value,
    });
  };

  return (
    <Container>
      <PlayerName>{currentPlayer}</PlayerName>
      <Label>
        마크
        <Select
          value={settings[`${currentPlayer}Mark`]}
          onChange={onChangePlayerMark}
        >
          {PLAYER.MARK.map((mark) => (
            <option key={mark} value={mark}>
              {mark}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        색상
        <datalist id="color_list">
          <option value="#ff7676"></option>
          <option value="#7676ff"></option>
          <option value="#760000"></option>
          <option value="#007676"></option>
        </datalist>
        <Input
          type="color"
          list="color_list"
          value={settings[`${currentPlayer}Color`]}
          onChange={onChangePlayerColor}
        />
      </Label>
    </Container>
  );
};

export default SettingPlayer;
