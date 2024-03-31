import Followers from "./components/main/Followers";
import { followersData } from "./data/FollowersData";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen font-inter bg-background text-text
      flex items-start justify-center"
    >
      <Followers followersData={followersData} />
    </div>
  );
};

export default App;
