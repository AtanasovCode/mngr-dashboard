import downIcon from '../../assets/icon-down.svg';

const SocialFollowers = ({
  icon,
  username,
  followers, 
  today,
  increase
}) => {

  return (
    <div className="flex flex-col items-center justify-center w-full bg-card p-6 rounded-md">
      <div className="flex items-center justify-center mb-5">
        <img src={icon} alt="social media icon" className="mr-4" />
        <div className="text-textAccent"> {username} </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="font-extrabold text-4xl mb-4"> {followers} </div>
        <div className="text-textAccent tracking-[.4rem]">FOLLOWERS</div>
      </div>

      <div className="flex items-center justify-center">
        <img src={downIcon} alt="icon down" className="w-3 mr-2" />
        <div> {today} </div>
      </div>
    </div>
  );
};

export default SocialFollowers;
