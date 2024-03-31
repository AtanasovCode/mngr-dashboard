import { useState } from "react";

import Followers from "./components/main/Followers";
import Overview from "./components/main/Overview";

//importing data
import { followersData, overviewData } from "./data/FollowersData";

const App = () => {

  const [theme, setTheme] = useState("light");

  localStorage.setItem("theme", theme);

  const toggleTheme = () => {

    theme === "light" ? setTheme("dark") : setTheme("light");

  }

  return (
    <div
      className={`${theme} w-screen min-h-screen font-inter bg-background text-text dark:bg-background-dark dark:text-text-dark
      flex flex-col items-center justify-center`}
    >
      <Followers followersData={followersData} toggleTheme={toggleTheme} theme={theme} />
      <Overview data={overviewData} />
    </div>
  );
};

export default App;
