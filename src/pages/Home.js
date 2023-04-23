import welcomeImg from '../img/welcome.png';
import { WelcomeImg } from './Home.styled';

const Home = () => {
  return (
    <>
      <WelcomeImg src={welcomeImg} alt="Welcome img" />
    </>
  );
};
export default Home;
