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

  let borderColor = "";

  switch (type) {
    case 'facebook':
      borderColor = 'bg-facebook';
      break;
    case 'twitter':
      borderColor = 'bg-twitter';
      break;
    case 'instagram':
      borderColor = 'bg-gradient-to-r from-instagramGradientStart to-instagramGradientEnd';
      break;
    case 'youtube':
      borderColor = 'bg-youtube';
      break;
    default:
      borderColor = 'bg-gray-500'; // Default border color
      break;
  }

  return (
    <div className={`flex flex-col items-center justify-center w-full bg-card dark:bg-card-dark p-6 rounded-md relative overflow-hidden`}>
      <div className={`absolute w-full top-0 left-0 h-1 ${borderColor}`}></div>
      <div className="flex items-center justify-center mb-5">
        <img src={icon} alt="social media icon" className="mr-2" />
        <div className="text-textAccent dark:text-textAccent-dark"> {username} </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="font-extrabold text-4xl mb-4"> {followers} </div>
        <div className="text-textAccent dark:text-textAccent-dark tracking-[.4rem]">FOLLOWERS</div>
      </div>

      <div className="flex items-center justify-center">
        {
          increase ? (
            <>
              <img src={upIcon} alt="icon down" className="w-3 mr-2" />
              <div className="text-lime"> {today} </div>
            </>
          ) : (
            <>
              <img src={downIcon} alt="icon down" className="w-3 mr-2" />
              <div className="text-brightRed"> {today} </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default SocialFollowers;
