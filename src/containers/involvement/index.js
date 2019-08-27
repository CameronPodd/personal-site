/**
 * Code Adapted from Alexander Lipianu.
 */

import "./involvement.scss";
import React from "react";
import { Section, Collapsible } from "../../components";

/**
 * Renders involvement section
 * @param {*} props - the component's properties
 *
 * usage: <InvolvementContainer title="V" description="W" data={[{details: 'X', icon: 'Y', label?: 'Z'}, ...]} />
 */
const InvolvementContainer = props => {
  const colWidth = Math.floor(12 / props.data.length);
  return (
    <Section theme="light" title={props.title} description={props.description}>
      <Collapsible.Grid className="grid-involvement">
        <Collapsible.Row>
          {props.data.map((involvement, i) => (
            <Collapsible.Col
              key={i}
              md={colWidth}
              body={
                !Array.isArray(involvement.details) ||
                !involvement.details.length ? (
                  involvement.details
                ) : (
                  <ul>
                    {involvement.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )
              }
            >
              <img
                src={involvement.src}
                alt={involvement.label}
                className="image"
              />
              {involvement.label && <h5>{involvement.label}</h5>}
              {involvement.position && <h6>{involvement.position}</h6>}
              {involvement.dates && <h6>{involvement.dates}</h6>}
            </Collapsible.Col>
          ))}
        </Collapsible.Row>
      </Collapsible.Grid>
    </Section>
  );
};

export default InvolvementContainer;
