import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.div<{ $color?: string | null }>`
  width: 40px;
  height: 40px;
  margin: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: ${({ $color }) => {
    return $color;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const S = { Row, Cell };

export default S;