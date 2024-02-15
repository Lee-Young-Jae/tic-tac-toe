import { useContext } from "react";
import { GameSettingsContext } from "../../../../context/GameSettingsContext";
import { PlayerMark } from "../../../../types/game";
import { PLAYER } from "../../../../utills/constance/gameSetting";

import S from "./Style";
import { useErrorModal } from "../../../../hooks/useModal";

interface SettingPlayerProps {
  currentPlayer: "player1" | "player2";
}

const SettingPlayer = ({ currentPlayer }: SettingPlayerProps) => {
  const { settings, updateSettings } = useContext(GameSettingsContext);
  const errorModal = useErrorModal();

  const onChangePlayerMark = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const otherPlayer = currentPlayer === "player1" ? "player2" : "player1";

    if (e.target.value === settings[`${otherPlayer}Mark`]) {
      errorModal("다른 플레이어와 같은 마크는 사용할 수 없어요...");
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
      errorModal(
        "선택한 색상이 배경색과 너무 비슷해요... 다른 색상을 선택해주세요."
      );
      return;
    }

    if (
      e.target.value ===
      settings[`${currentPlayer === "player1" ? "player2" : "player1"}Color`]
    ) {
      errorModal("다른 플레이어와 동일한 색상은 사용할 수 없어요...");
      return;
    }

    updateSettings({
      ...settings,
      [`${currentPlayer}Color`]: e.target.value,
    });
  };

  return (
    <S.Container>
      <S.PlayerName>{currentPlayer}</S.PlayerName>
      <S.Label>
        마크
        <S.Select
          value={settings[`${currentPlayer}Mark`]}
          onChange={onChangePlayerMark}
        >
          {PLAYER.MARK.map((mark) => (
            <S.Option key={mark} value={mark}>
              {mark}
            </S.Option>
          ))}
        </S.Select>
      </S.Label>
      <S.Label>
        색상
        <datalist id="color_list">
          <option value="#ff7676"></option>
          <option value="#7676ff"></option>
          <option value="#760000"></option>
          <option value="#007676"></option>
        </datalist>
        <S.Input
          type="color"
          list="color_list"
          value={settings[`${currentPlayer}Color`]}
          onChange={onChangePlayerColor}
        />
      </S.Label>
    </S.Container>
  );
};

export default SettingPlayer;
