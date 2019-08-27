/**
 * Code Adapted from Alexander Lipianu.
 */

import "./footer.scss";
import React from "react";
import { IconButton } from "..";

/**
 * Renders footer component
 *
 * usage: <Footer />
 */
const Footer = () => (
  <footer>
    <div>
      <IconButton
        className="footer-button"
        ariaLabel="Email"
        href="mailto:podd@usc.edu"
        icon="envelope"
      />
      <IconButton
        className="footer-button"
        ariaLabel="LinkedIn"
        href="https://linkedin.com/in/cameronpodd"
        prefix="fab"
        icon="linkedin"
      />
      <IconButton
        className="footer-button"
        ariaLabel="GitHub"
        href="https://github.com/CameronPodd"
        prefix="fab"
        icon="github"
      />
    </div>
    <div>
      <p>
        Website code adapted from Alexander Lipianu. See the original website{" "}
        <a href="https://alexlipianu.com/">here</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
