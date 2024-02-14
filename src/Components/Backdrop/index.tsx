import S from "./Style";

interface BackdropProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const Backdrop = ({ children, onClick }: BackdropProps) => {
  return <S.Container onClick={onClick}>{children}</S.Container>;
};

export default Backdrop;
