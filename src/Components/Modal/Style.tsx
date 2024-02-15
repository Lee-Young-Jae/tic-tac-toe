import styled, { keyframes } from "styled-components";

const fadeInAndSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  padding: 20px;
  position: relative;
  width: 350px;
  z-index: 101;

  animation: ${fadeInAndSlideUp} 0.3s ease;
`;

const Header = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Main = styled.div`
  flex: 1 1;
  max-height: 400px;
  min-height: 40px;
  overflow-y: scroll;
`;

const Footer = styled.div`
  padding-top: 10px;

  & > * {
    margin-right: 10px;
  }
`;

const S = { Container, Header, Main, Footer };

export default S;
