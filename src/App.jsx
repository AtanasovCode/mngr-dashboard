import Followers from "./components/main/Followers";
import { followersData } from "./data/FollowersData";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen font-inter bg-background-dark text-white
      flex items-center justify-center"
    >
      <Followers followersData={followersData} />
    </div>
  );
};

export default App;
