/**
 * Code Adapted from Alexander Lipianu.
 */

import "./App.scss";
import React from "react";
import { Loader, Footer, LoadingAnimation } from "./components";
import {
  SplashContainer,
  AboutContainer,
  SkillsContainer,
  ExperienceContainer,
  ProjectsContainer
} from "./containers";
import data from "./data.json";

/**
 * App component
 */
class App extends React.Component {
  state = {
    data: null,
    errorMessage: "Cannot get data"
  };

  /**
   * Fetch app data
   */
  loader = async () => {
    return data;
  };

  /**
   * Load data into containers
   */
  onSuccess = result => {
    result = result.data;
    const data = {};
    const sections = [
      "splash",
      "about",
      "education",
      "skills",
      "experience",
      "projects",
      "involvement"
    ];
    for (const section of sections) {
      const sectionData = result.find(x => x.key === section);
      if (sectionData) {
        data[section] = sectionData;
      }
    }
    this.setState({ data });
  };

  /**
   * Renders app
   */
  render() {
    const { data } = this.state;

    const dataRender = data ? (
      <>
        <SplashContainer {...data.splash} />
        <AboutContainer {...data.about} />
        <ExperienceContainer {...data.education} />
        <SkillsContainer {...data.skills} />
        <ExperienceContainer {...data.experience} />
        <ProjectsContainer {...data.projects} />
        <ExperienceContainer {...data.involvement} />
        <Footer />
      </>
    ) : null;

    return (
      <Loader
        loader={this.loader}
        animation={LoadingAnimation}
        onSuccess={this.onSuccess}
        onError={this.onError}
        errorMessage={this.state.errorMessage}
      >
        {dataRender}
      </Loader>
    );
  }
}

export default App;
