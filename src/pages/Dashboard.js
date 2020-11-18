import React from "react";
import { Info, Search, Navbar, Timeline } from "../components";
import loadingImage from "../imgs/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar></Navbar>
        <Search />
        <section className="section">
          <img src={loadingImage} className="loading-img" alt="loading" />
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <Navbar></Navbar>
        <Search />
        <Info />
        <Timeline />
      </main>
    );
  }
};

export default Dashboard;
