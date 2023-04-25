import errorImg from '../../img/error.png';
import { ErrorImgContainer, ErrorImgStyled } from './ErrorMsg.styled';

export const ErrorMsg = () => {
  return (
    <ErrorImgContainer>
      <ErrorImgStyled src={errorImg} alt="Error message" />
    </ErrorImgContainer>
  );
};
