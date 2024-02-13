import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.div`
  width: 75px;
  height: 75px;
  margin: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const S = { Row, Cell };

export default S;
