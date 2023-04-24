import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TweetsContainer = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

export const LoadMoreBtn = styled.button`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #ebd8ff;

  width: 196px;
  height: 50px;

  display: block;
  margin: 24px auto;
`;

export const StyledLinkBack = styled(NavLink)`
  background: white;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 50%;

  position: fixed;
  left: 30px;
  bottom: 30px;

  z-index: 99;
`;
