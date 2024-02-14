import styled from "styled-components";

const GameNavigater = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const S = { GameNavigater };

export default S;
