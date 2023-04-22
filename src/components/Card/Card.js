import {
  Avatar,
  DecorCardPart,
  Followers,
  InfoCardPart,
  LogoImg,
  TweetsListItem,
  Tweets,
  FollowBtn,
} from './Card.styled';
import logo from '../../img/logo.png';
import decorImg from '../../img/decor.png';
import { useState } from 'react';

export const Card = ({ userInfo }) => {
  const [following, setfollowing] = useState(false);

  const { tweets, followers, avatar } = userInfo;
  const onClickFollow = () => {
    console.log(following);
    setfollowing(!following);
    console.log(following);
  };
  const converNumber = number => new Intl.NumberFormat('ja-JP').format(number);
  return (
    <TweetsListItem>
      <DecorCardPart>
        <LogoImg src={logo} alt="Logo" />
        <img src={decorImg} alt="Logo" />
      </DecorCardPart>
      <InfoCardPart>
        <Avatar src={avatar} alt="Avatar" />
        <Tweets>{tweets} TWEETS</Tweets>
        <Followers>{converNumber(followers)} FOLLOWERS</Followers>
        <FollowBtn
          following={following ? 'following' : ''}
          onClick={() => onClickFollow()}
        >
          {following ? 'following' : 'FOLLOW'}
        </FollowBtn>
      </InfoCardPart>
    </TweetsListItem>
  );
};
