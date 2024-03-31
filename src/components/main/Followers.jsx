import SocialFollowers from '../side/SocialFollowers';

import downIcon from '../../assets/icon-down.svg';

const Followers = ({
  followersData,
}) => {
  return (
    <div className="flex flex-col w-[90%] overflow-hidden mb-8">
      <div className="flex flex-col mb-8 p-5">
        <div className="text-2xl font-bold mb-2">Social Media Dashboard</div>
        <div className="text-md text-textAccent dark:text-textAccent-dark">Total followers: 23,004</div>
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
