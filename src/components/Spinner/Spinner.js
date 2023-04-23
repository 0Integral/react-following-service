import { ClipLoader } from 'react-spinners';
import { SpinnerContainer } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <ClipLoader color="#4b2a99" loading size={100} />
    </SpinnerContainer>
  );
};
