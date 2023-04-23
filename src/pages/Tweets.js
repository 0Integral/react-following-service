import { getMoreUsersInfo, getUsersBase } from 'services/UserServices';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'components/localStorage/localStorage';

import { Card } from 'components/Card/Card';
import { LoadMoreBtn, StyledLinkBack, TweetsList } from './Tweets.styled';
import { Spinner } from 'components/Spinner/Spinner';

const Tweets = () => {
  const [userStatistics, setUserStatistic] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);
  const [follow, setfollow] = useLocalStorage('follow');
  const [maxPages, setMaxPages] = useState(0);

  const handleLoadMore = async () => {
    try {
      setPage(prev => prev + 1);
      const res = await getMoreUsersInfo(page);
      setDisplayUsers(prev => [...prev, ...res]);
    } catch (e) {
      setError(e.message);
    }
  };

  const onFollow = e => {
    const followingId = e.target.id;
    follow.some(id => id === followingId)
      ? setfollow(prev => prev.filter(id => id !== followingId))
      : setfollow(prev => [...prev, followingId]);
  };

  function getInfoAboutFollowing(id) {
    return follow.some(followId => followId === id);
  }

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const res = await getUsersBase();
        const resForDisplay = await getMoreUsersInfo();
        setUserStatistic(res);
        setDisplayUsers(resForDisplay);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setMaxPages(Math.round(userStatistics.length / 6));
  }, [userStatistics]);

  useEffect(() => {
    page > maxPages ? setLoadMore(false) : setLoadMore(true);
  }, [page, maxPages]);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <StyledLinkBack to="/">Back</StyledLinkBack>
      <TweetsList>
        {displayUsers.map(user => {
          return (
            <li key={user.id}>
              <Card
                userInfo={user}
                onFollow={onFollow}
                following={getInfoAboutFollowing}
              />
            </li>
          );
        })}
      </TweetsList>
      {loadMore && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </div>
  );
};

export default Tweets;
