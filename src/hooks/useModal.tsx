import Modal from "../Components/Modal";
import Backdrop from "../Components/Backdrop";
import { createPortal } from "react-dom";

import { useContext, ReactNode } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const { modal, setModal, isAnimating, setIsAnimating } =
    useContext(ModalContext);

  const openModal = (modal: ReactNode) => {
    setModal(modal);
  };

  const closeModal = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setModal(null);
      setIsAnimating(false);
    }, 300);
  };

  return { openModal, closeModal, modal, isAnimating };
};

export const useErrorModal = () => {
  const { openModal, closeModal } = useModal();
  const openErrorModal = (message: string) => {
    openModal(
      <Modal
        header="😭"
        footer={
          //TODO: 공통 버튼 컴포넌트로 변경
          <button onClick={closeModal}>확인</button>
        }
      >
        {message}
      </Modal>
    );
  };

  return openErrorModal;
};

export const ModalContainer = () => {
  const { modal, closeModal, isAnimating } = useModal();

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  return modal
    ? createPortal(
        <Backdrop isAnimating={isAnimating} onClick={onBackdropClick}>
          {modal}
        </Backdrop>,
        document.getElementById("modal-root") as Element
      )
    : null;
};
