import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {  
    opacity: 0;
  }
`;

const fadeOutAndSlideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const Container = styled.div<{ $isAnimating?: boolean }>`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-in-out;

  ${({ $isAnimating }) =>
    $isAnimating &&
    css`
      ${fadeOut} 0.3s ease;

      & .modal {
        animation: ${fadeOutAndSlideDown} 0.4s ease;
      }
    `}
`;

const S = { Container };

export default S;
