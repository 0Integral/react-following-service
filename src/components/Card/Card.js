export const Card = ({ userInfo }) => {
  const { user, tweets, followers, avatar } = userInfo;
  return (
    <div>
      {user}
      <img src={avatar} alt="Avatar"></img>
    </div>
  );
};
