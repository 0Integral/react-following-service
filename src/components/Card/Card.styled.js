import styled from 'styled-components';

export const TweetsListItem = styled.div`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  position: relative;
`;

export const DecorCardPart = styled.div`
  padding: 28px 36px 18px;
`;

export const InfoCardPart = styled.div`
  position: relative;
  text-align: center;
  color: #ebd8ff;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  &:before {
    content: '';
    width: 100%;
    display: block;
    height: 8px;
    background: #ebd8ff;
    margin-bottom: 62px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  border: 13px solid #ebd8ff;
  border-radius: 50%;

  overflow: hidden;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;
export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const FollowBtn = styled.button`
  background: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  width: 196px;
  height: 50px;
`;
