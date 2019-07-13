import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile_me.png";

class App extends Component {
  state = { displayBio: false };
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   console.log("Component this", this);
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is aishwarya.</p>
        <p>I am always looking forward to working on meaningfull projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>My favourite language to code in is Java</p>
            <p>I am passionate about Computer science and coding.</p>
            <p>
              I love diversity of the Human Race, sports, travelling and music
              (but all these come after my love for food)
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}
export default App;
