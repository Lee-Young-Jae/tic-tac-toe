import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled.button`
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
  ModalContainer,
  ModalButton,
};

export default S;
