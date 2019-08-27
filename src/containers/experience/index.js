/**
 * Code Adapted from Alexander Lipianu.
 */

import "./experience.scss";
import React from "react";
import { Section, Collapsible } from "../../components";

/**
 * Renders experience section
 * @param {*} props - the component's properties
 *
 * usage: <ExperienceContainer title="V" description="W" data={[{details: 'X', icon: 'Y', label?: 'Z'}, ...]} />
 */
const ExperienceContainer = props => {
  const colWidth = Math.floor(12 / props.data.length);
  return (
    <Section theme="light" title={props.title} description={props.description}>
      <Collapsible.Grid className="grid-experience">
        <Collapsible.Row>
          {props.data.map((experience, i) => (
            <Collapsible.Col
              key={i}
              md={colWidth}
              body={
                !Array.isArray(experience.details) ||
                !experience.details.length ? (
                  experience.details
                ) : (
                  <ul>
                    {experience.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )
              }
            >
              <img
                src={experience.src}
                alt={experience.label}
                className="image"
              />
              {experience.label && <h5>{experience.label}</h5>}
              {experience.position && <h6>{experience.position}</h6>}
              {experience.dates && <h6>{experience.dates}</h6>}
            </Collapsible.Col>
          ))}
        </Collapsible.Row>
      </Collapsible.Grid>
    </Section>
  );
};

export default ExperienceContainer;
