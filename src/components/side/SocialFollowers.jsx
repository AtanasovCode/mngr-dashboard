import downIcon from '../../assets/icon-down.svg';
import upIcon from '../../assets/icon-up.svg';

const SocialFollowers = ({
  icon,
  username,
  followers,
  today,
  increase,
  type,
}) => {

  return (
    <div className="flex flex-col items-center justify-center w-full bg-card p-6 rounded-md">
      <div className="flex items-center justify-center mb-5">
        <img src={icon} alt="social media icon" className="mr-2" />
        <div className="text-textAccent"> {username} </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="font-extrabold text-4xl mb-4"> {followers} </div>
        <div className="text-textAccent tracking-[.4rem]">FOLLOWERS</div>
      </div>

      <div className="flex items-center justify-center">
        {
          increase ? (
            <>
              <img src={upIcon} alt="icon down" className="w-3 mr-2" />
              <div className="text-green-400"> {today} </div>
            </>
          ) : (
            <>
              <img src={downIcon} alt="icon down" className="w-3 mr-2" />
              <div className="text-red-400"> {today} </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default SocialFollowers;
