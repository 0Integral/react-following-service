import { Card } from 'components/Card/Card';
import { TweetsStyledList } from './TweetList.styled';

export const TweetsList = ({ users, onFollow, following }) => {
  return (
    <TweetsStyledList>
      {users.map(user => {
        return (
          <li key={user.id}>
            <Card userInfo={user} onFollow={onFollow} following={following} />
          </li>
        );
      })}
    </TweetsStyledList>
  );
};
