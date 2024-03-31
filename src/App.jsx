import Followers from "./components/main/Followers";
import Overview from "./components/main/Overview";

//importing data
import { followersData, overviewData } from "./data/FollowersData";

const App = () => {

  localStorage.setItem("theme", "light");

  return (
    <div
      className="w-screen min-h-screen font-inter bg-background text-text dark:bg-background-dark dark:text-text-dark
      flex flex-col items-center justify-center"
    >
      <Followers followersData={followersData} />
      <Overview data={overviewData} />
    </div>
  );
};

export default App;
