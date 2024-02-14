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
    width: 100%;
  }
`;

const MainButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #00000090;
  }
`;

const S = {
  Container,
  MainButton,
};

export default S;
