import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  NavItem,
  NavList,
  StyledLink,
} from 'components/NavBar/NavBar.styled';
import logo from '../../img/Avatar.png';
export const NavBar = () => {
  return (
    <Header>
      <Container>
        <Link to="/">
          <img width={40} src={logo} alt="logo" />
        </Link>

        <nav>
          <NavList>
            <NavItem>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/tweets">Tweets</StyledLink>
            </NavItem>
          </NavList>
        </nav>
      </Container>
    </Header>
  );
};
