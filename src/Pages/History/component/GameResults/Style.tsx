import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  max-height: 700px;
  overflow-y: auto;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

export const PlayGameButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e6e6e6;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ResultItem = styled.li`
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f2f2f2;
  }
`;

const S = {
  Container,
  ResultItem,
  PlayGameButton,
};

export default S;
