import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.div<{ $color?: string | null }>`
  width: 75px;
  height: 75px;
  margin: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: ${({ $color }) => {
    return $color;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const PlayerStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid transparent;
  transition: border 0.2s;
  border-radius: 5px;

  &.active {
    border: 2px solid #000000;
  }
`;

const PlayerMark = styled.p<{ $color?: string | null }>`
  font-size: 2rem;
  color: ${({ $color }) => {
    return $color;
  }};
`;

const S = { Row, Cell, PlayerStatus, PlayerMark };

export default S;
