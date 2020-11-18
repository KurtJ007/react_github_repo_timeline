import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faVuejs,
  faSass,
  faHtml5,
  faPython,
  faPhp,
  faCss3Alt,
  faRust,
  faVimeo,
  faJava
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faGem } from "@fortawesome/free-solid-svg-icons";

const DrawIcon = (props) => {
  switch (props.language) {
    case "JavaScript":
      return <FontAwesomeIcon icon={faJsSquare} />;
    case "Vue":
      return <FontAwesomeIcon icon={faVuejs} />;
    case "HTML":
      return <FontAwesomeIcon icon={faHtml5} />;
    case "Python":
      return <FontAwesomeIcon icon={faPython} />;
    case "PHP":
      return <FontAwesomeIcon icon={faPhp} />;
    case "CSS":
      return <FontAwesomeIcon icon={faCss3Alt} />;
    case "Rust":
      return <FontAwesomeIcon icon={faRust} />;
    case "SCSS":
      return <FontAwesomeIcon icon={faSass} />;
    case "VimL":
      return <FontAwesomeIcon icon={faVimeo} />;
    case "Ruby":
      return <FontAwesomeIcon icon={faGem} />;
    case "Java":
      return <FontAwesomeIcon icon={faJava} />;
    default:
      return <FontAwesomeIcon icon={faCode} />;
  }
};

export default DrawIcon;
