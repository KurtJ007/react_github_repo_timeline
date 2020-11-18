import React, { useState, useEffect } from "react";
//import mockUser from "./mockData/mockUser";
//import mockRepo from "./mockData/mockRepo";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState([]);
  const [timeline, setTimeline] = useState([]);

  const [request, setRequest] = useState(0);
  const [timeReset, setTimeReset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  //error
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      await Promise.allSettled([
        axios(`${rootUrl}/users/${user}/repos?per_page=100`)
      ])
        .then((results) => {
          const [repos] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setTimeline(repos.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "Username does not exist!");
    }

    checkRequests();
    setIsLoading(false);
  };

  // check requests
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining, reset }
        } = data;
        setRequest(remaining);
        setTimeReset(reset);
        if (remaining === 0) {
          //throw error
          toggleError(true, "Sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };

  //errors
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }
  useEffect(checkRequests, []);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        timeline,
        request,
        timeReset,
        error,
        searchGithubUser,
        isLoading
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
