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

export const Card = ({ userInfo, onFollow, following }) => {
  const { id, tweets, followers, avatar } = userInfo;
  const followNow = following(id);

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
        <Followers>
          {followNow ? converNumber(followers + 1) : converNumber(followers)}{' '}
          FOLLOWERS
        </Followers>
        <FollowBtn
          id={id}
          following={followNow ? 'following' : ''}
          onClick={onFollow}
        >
          {followNow ? 'following' : 'follow'}
        </FollowBtn>
      </InfoCardPart>
    </TweetsListItem>
  );
};
