import Modal from "../../../../Components/Modal";
import GameResult from "../GameResultDetail";
import { GameResult as GameResultType } from "../../../../types/game";
import S from "./Style";

interface GameResultModalProps {
  gameResult: GameResultType;
  closeModal: () => void;
}

const GameResultModal = ({ gameResult, closeModal }: GameResultModalProps) => {
  return (
    <Modal
      header="게임 결과"
      footer={
        <S.ModalButton
          onClick={() => {
            closeModal();
          }}
        >
          닫기
        </S.ModalButton>
      }
    >
      <S.ModalContainer>
        <GameResult gameResult={gameResult} />
      </S.ModalContainer>
    </Modal>
  );
};

export default GameResultModal;
