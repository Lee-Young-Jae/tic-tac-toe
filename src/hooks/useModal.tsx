import Modal from "../Components/Modal";
import Backdrop from "../Components/Backdrop";

import { createPortal } from "react-dom";

import { useContext, ReactNode } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const { modal, setModal } = useContext(ModalContext);

  const openModal = (modal: ReactNode) => {
    setModal(modal);
  };

  const closeModal = () => {
    setModal(null);
  };

  return { openModal, closeModal, modal };
};

export const ModalContainer = () => {
  const { modal, closeModal } = useModal();

  return modal
    ? createPortal(
        <Backdrop onClick={closeModal}>{modal}</Backdrop>,
        document.getElementById("modal-root") as Element
      )
    : null;
};
