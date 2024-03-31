import SocialFollowers from '../side/SocialFollowers';
import Toggle from '../side/Toggle';

import downIcon from '../../assets/icon-down.svg';

const Followers = ({
  followersData,
  toggleTheme,
  theme,
}) => {
  return (
    <div className="flex flex-col w-[90%] overflow-hidden my-8">
      <div className="flex flex-col items-start justify-start mb-8 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col mb-6 md:mb-0">
          <div className="text-2xl font-bold mb-2">Social Media Dashboard</div>
          <div className="text-md text-textAccent dark:text-textAccent-dark">Total followers: 23,004</div>
        </div>
        
        <Toggle toggleTheme={toggleTheme} theme={theme} />
      </div>

      <div className="grid grid-cols-1 gap-4 w-full
      sm:grid-cols-2 lg:grid-cols-4 lg:gap-6
      ">
        {
          followersData.map((data) => {
            return (
              <SocialFollowers
                key={data.id}
                username={data.username}
                followers={data.followers}
                today={data.today}
                icon={data.icon}
                increase={data.increase}
                type={data.type}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Followers;
