import S from "./Style";

interface BackdropProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isAnimating?: boolean;
}
const Backdrop = ({ children, onClick, isAnimating }: BackdropProps) => {
  return (
    <S.Container $isAnimating={isAnimating} onClick={onClick}>
      {children}
    </S.Container>
  );
};

export default Backdrop;
