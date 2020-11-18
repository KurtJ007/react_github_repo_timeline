import React from "react";
import { Info, Search, Timeline } from "../components";
import loadingImage from "../imgs/preloader.svg";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Search />
        <section className="section">
          <img src={loadingImage} className="loading-img" alt="loading" />
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <Search />
        <Info />
        <Timeline />
      </main>
    );
  }
};

export default Dashboard;
