import { getMoreUsersInfo, getUsersBase } from 'services/UserServices';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'components/localStorage/localStorage';
import { TweetsList } from 'components/TweetList/TweetList';

import { LoadMoreBtn, StyledLinkBack, TweetsContainer } from './Tweets.styled';
import { Spinner } from 'components/Spinner/Spinner';
import { Select } from 'components/Select/Select';

const Tweets = () => {
  const [userStatistics, setUserStatistic] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [allUsers, setallUsers] = useState([]);
  const [filterUsers, setfilterUsers] = useState([]);

  const [follow, setfollow] = useLocalStorage('follow');
  const [filterValue, setFilterValue] = useState('all');

  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(2);
  const [maxPages, setMaxPages] = useState(0);

  const handleLoadMore = async () => {
    try {
      setPage(prev => prev + 1);
      const res = await getMoreUsersInfo(page);
      setallUsers(prev => [...prev, ...res]);
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

  const handleSelectChange = e => {
    const value = e.target.value.toLowerCase();
    setFilterValue(value);
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
        setallUsers(resForDisplay);
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

  useEffect(() => {
    switch (filterValue) {
      case 'follow':
        setfilterUsers(userStatistics.filter(user => follow.includes(user.id)));
        setLoadMore(false);

        break;
      case 'following':
        setfilterUsers(
          userStatistics.filter(user => !follow.includes(user.id))
        );
        setLoadMore(false);

        break;
      default:
        setfilterUsers([]);
        setLoadMore(true);
    }
  }, [filterValue, follow, userStatistics]);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <TweetsContainer>
      <StyledLinkBack to="/">Back</StyledLinkBack>
      <Select handleSelectChange={handleSelectChange} />
      <TweetsList
        users={!filterUsers.length ? allUsers : filterUsers}
        onFollow={onFollow}
        following={getInfoAboutFollowing}
      />
      {loadMore && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </TweetsContainer>
  );
};

export default Tweets;
