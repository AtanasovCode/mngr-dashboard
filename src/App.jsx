import Followers from "./components/main/Followers";
import Overview from "./components/main/Overview";

//importing data
import { followersData, overviewData } from "./data/FollowersData";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen font-inter bg-background text-text
      flex flex-col items-center justify-center"
    >
      <Followers followersData={followersData} />
      <Overview data={overviewData} />
    </div>
  );
};

export default App;
