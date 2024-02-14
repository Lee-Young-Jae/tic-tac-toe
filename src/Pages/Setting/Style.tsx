import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 500px;
  height: 100dvh;
  border-radius: 5px;
  padding: 10px;

  box-shadow: 0 0 5px 0 #00000060;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const SettingBoardSize = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BoardSizeButton = styled.button`
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;
  margin-bottom: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  &.active {
    background-color: #000;
    color: #fff;
  }
`;

const SettingWinCondition = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const WinConditionButton = styled(BoardSizeButton)``;

const GameStartButton = styled.button`
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #000;
  color: #fff;
  transition: 0.2s;

  &:hover {
    background-color: #333;
  }
`;

const SettingPlayer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Players = styled.div`
  margin: 0 auto;

  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Option = styled.option`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const S = {
  Container,
  Label,
  Select,
  Option,
  SettingPlayer,
  Players,
  SettingBoardSize,
  BoardSizeButton,
  SettingWinCondition,
  WinConditionButton,
  GameStartButton,
};

export default S;
