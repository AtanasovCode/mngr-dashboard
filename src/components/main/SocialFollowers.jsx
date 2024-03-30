const SocialFollowers = ({ icon, username, followers, color }) => {
  const borderColor = `border-${color}`;

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        border-solid ${borderColor} border-2 
    `}
    >
      <div className="flex items-center justify-center">
        <div>
          <img src={icon} alt="social media icon" className="mr-4" />
        </div>
        <div>{username}</div>
      </div>
    </div>
  );
};

export default SocialFollowers;
