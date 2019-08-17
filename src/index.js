import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "intersection-observer";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import App from "./App";

// build font awesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCogs,
  faCaretDown,
  faGlobe,
  faGamepad,
  faDownload,
  faEnvelope,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
library.add(
  // solid
  faCogs,
  faCaretDown,
  faGlobe,
  faGamepad,
  faDownload,
  faEnvelope,
  faStar,
  // brands
  faGithub,
  faLinkedin,
  faCodepen
);

ReactDOM.render(<App />, document.getElementById("root"));
