import { useState } from "react";
import Followers from "./components/main/Followers";

const App = () => {

  const [followersData, setFollowersData] = useState([
    {
      username: "@nathanf",
      followers: 1987,
      today: 12,
    },
    {
      username: "@nathanf",
      followers: 1044,
      today: 99,
    },
    {
      username: "@realnathanf",
      followers: 11000,
      today: 1099,
    },
    {
      username: "Nathan F.",
      subscribers: 8239,
      today: 144,
    },
  ]);

  return (
    <div
      className="
      w-screen h-screen
      font-inter bg-background-dark text-white
      flex flex-col items-center justify-center
    "
    >
      <Followers followersData={setFollowersData} />
    </div>
  );
};

export default App;
