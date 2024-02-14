import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

const PlayerStatusSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const MainButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const S = { Container, PlayerStatusSection, MainButton };

export default S;
