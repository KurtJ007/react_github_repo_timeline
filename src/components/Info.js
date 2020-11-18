import React from "react";
import { GithubContext } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUserFriends,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";

const Info = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faBook} size="2x" />,
      label: "Repos",
      value: public_repos,
      color: "pink"
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faUserFriends} size="2x" />,
      label: "Followers",
      value: followers,
      color: "green"
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faUserPlus} size="2x" />,
      label: "Following",
      value: following,
      color: "purple"
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faFileCode} size="2x" />,
      label: "Gists",
      value: public_gists,
      color: "yellow"
    }
  ];

  return (
    <section className="section">
      <div className="info-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

export default Info;
