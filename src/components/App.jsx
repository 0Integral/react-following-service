import { getUsersBase } from 'services/UserServices';
import { Card } from './Card/Card';
import { useEffect, useState } from 'react';
import { TweetsList } from './App.styled';

export const App = () => {
  const [userStatistics, setUserStatistic] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFunc();
  }, []);

  const getFunc = async () => {
    setLoading(true);
    try {
      const data = await getUsersBase();

      setUserStatistic(data);
    } catch (er) {
      setError(er);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <div>Await plz</div>}
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
