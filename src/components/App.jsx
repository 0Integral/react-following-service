import { getUsersBase } from 'services/UserServices';
import { Card } from './Card/Card';
import { useEffect, useState } from 'react';
import { TweetsList } from './App.styled';

export const App = () => {
  const [userStatistics, setUserStatistic] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  // const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(2);

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const res = await getUsersBase();
        setUserStatistic(res);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  return (
    <div>
      {/* {loading && <div>Await plz</div>} */}
      <TweetsList>
        {userStatistics.map(user => {
          return (
            <li key={user.id}>
              <Card userInfo={user} />
            </li>
          );
        })}
      </TweetsList>
    </div>
  );
};
