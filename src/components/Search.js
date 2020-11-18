import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { GithubContext } from "../context/context";

const Search = () => {
  const [user, setUser] = React.useState("");
  //get global context
  const {
    request,
    timeReset,
    error,
    searchGithubUser,
    isLoading
  } = React.useContext(GithubContext);
  const [timeLeft, setTimeLeft] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  //calculate time left till reset request
  const calculateTime = () => {
    const date = new Date(0);
    date.setUTCSeconds(timeReset);
    const countDownDate = new Date(date).getTime();
    let difference = countDownDate - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  React.useEffect(() => {
    if (request !== 60) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTime());
      }, 1000);
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      interval !== "s"
        ? `${timeLeft[interval]}${interval}:`
        : `${timeLeft[interval]}${interval}`
    );
  });
  //

  return (
    <section className="section search">
      <div className="searchWrapper ">
        {error.show && (
          <div className="errorWrapper">
            <p>{error.msg}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <FontAwesomeIcon icon={faSearch} size="2x" />
            <input
              type="text"
              placeholder="Enter Github User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {request > 0 && !isLoading && <button type="submit">Search</button>}
          </div>
        </form>
        <p className="request">
          Requests: {request} / 60 - Reset:{" "}
          {timerComponents.length ? timerComponents : <span>0</span>}
        </p>
      </div>
    </section>
  );
};

export default Search;
