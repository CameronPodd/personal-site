/**
 * Code Adapted from Alexander Lipianu.
 */

import React from "react";
import { Section, Paragraph } from "../components";

/**
 * Renders about section
 * @param {*} props - the component's properties
 *
 * usage: <AboutContainer title="U" headshot="V" message?={{width?: 'W', text?: 'X'}} description?={{links: ['Y', ...], text?: 'Z'}} />
 */
const AboutContainer = props => (
  <Section
    className="about"
    theme="light"
    title={props.title}
    headshot={props.image}
  >
    {props.text && props.text.text && (
      <Paragraph links={props.text.links}>{props.text.text}</Paragraph>
    )}
  </Section>
);

export default AboutContainer;
