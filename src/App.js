import "./App.scss";
import React from "react";
import { Loader, Footer, LoadingAnimation } from "./components/components";
import {
  SplashContainer,
  AboutContainer,
  TimelineContainer,
  SkillsContainer,
  ExperienceContainer,
  ProjectsContainer,
  PensContainer
} from "./containers/containers";
import data from "./data.json";

/**
 * App component
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      errorMessage:
        "api.alexlipianu.com is currently unavailable or cannot be reached"
    };
    this.onSuccess = this.onSuccess.bind(this);
  }

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
      "timeline",
      "skills",
      "experience",
      "projects",
      "pens"
    ];
    sections.forEach(section => {
      const sectionData = result.find(x => x._id === section);
      if (sectionData) {
        data[section] = sectionData;
      }
    });
    this.setState({ data });
  };

  /**
   * Renders app
   */
  render() {
    const { data } = this.state;

    const renderIfData = data ? (
      <>
        <SplashContainer {...data.splash} />
        <AboutContainer {...data.about} />
        <TimelineContainer {...data.timeline} />
        <SkillsContainer {...data.skills} />
        <ExperienceContainer {...data.experience} />
        <ProjectsContainer {...data.projects} />
        <PensContainer {...data.pens} />
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
        {renderIfData}
      </Loader>
    );
  }
}

export default App;
