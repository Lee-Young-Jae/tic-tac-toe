import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.div<{ $color?: string | null; $displayStep?: Boolean }>`
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
  position: relative;

  cursor: pointer;

  & span {
    position: absolute;
    top: 1px;
    right: 1px;
    font-size: 0.7rem;
    color: #666;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

const S = { Row, Cell };

export default S;
