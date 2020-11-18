import React from "react";
import { GithubContext } from "../context/context";
import DrawIcon from "./drawIcon";
//https://www.youtube.com/watch?v=rl90OmoSPZ0&list=PLW0RabRDhwwzLQfL8E9SIJtZioPAc8MPn&index=3

const Timeline = () => {
  const { timeline } = React.useContext(GithubContext);
  var row = 3;
  if (Object.keys(timeline).length !== 0) {
    return timeline
      .sort((a, b) => {
        return a.created_at > b.created_at ? 1 : -1;
      })
      .map(({ name, html_url, description, created_at, language }, index) => {
        if (index % 2 === 0) {
          return (
            <div
              key={index}
              className="timeGroup"
              style={{ gridRow: (row += 1) }}
            >
              <span
                title={language !== "null" ? language : "Unknown"}
                className="timeIcon"
              >
                <DrawIcon language={language} />
              </span>

              <div className="timeItem">
                <div>
                  <h4>
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noreferrer"
                      title={description}
                    >
                      {name}
                    </a>
                  </h4>
                  <p>Created: {created_at.split("T", 1)}</p>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="timeGroup"
              style={{ gridRow: (row += 1) }}
            >
              <div className="timeItem">
                <div>
                  <h4>
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noreferrer"
                      title={description}
                    >
                      {name}
                    </a>
                  </h4>
                  <p>Created: {created_at.split("T", 1)}</p>
                </div>
              </div>
              <span
                title={language !== "null" ? language : "Unknown"}
                className="timeIcon"
              >
                <DrawIcon language={language} />
              </span>
            </div>
          );
        }
      });
  } else {
    return "";
  }
};

export default Timeline;
