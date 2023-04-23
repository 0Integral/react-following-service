import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 12px 0;

  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #e9f0f5;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const NavItem = styled.ul`
  display: flex;

  align-content: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;
  color: rgb(142 142 142);
  padding: 10px;
  font-weight: 600;

  &.active {
    color: #04a0e0;
    border: 1px solid #04a0e0;
    border-radius: 4px;
    font-weight: 500;
    text-decoration: none;
  }
`;
