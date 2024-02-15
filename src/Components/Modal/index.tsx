import { useEffect, useRef } from "react";
import S from "./Style";

interface ModalProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({ children, header, footer }: ModalProps) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const buttons = footerRef.current.querySelectorAll("button");
    if (buttons.length === 0) return;

    buttons[0]?.focus();
  }, [footerRef]);
  return (
    <S.Container className="modal">
      {header && <S.Header>{header}</S.Header>}
      <S.Main>{children}</S.Main>
      {footer && <S.Footer ref={footerRef}>{footer}</S.Footer>}
    </S.Container>
  );
};

export default Modal;
