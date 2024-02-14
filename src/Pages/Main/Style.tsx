import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;

  user-select: none;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 3rem;
`;

const Navigater = styled.div`
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

const S = { Container, Title, Navigater };

export default S;
