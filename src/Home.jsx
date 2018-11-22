import React, { Component } from 'react';
import './App.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleProjectsClick = this.handleProjectsClick.bind(this);
  }

  handleProjectsClick() {
    this.props.onProjectsClick()
  }

  render() {
    return (
      <div className="content">
        <h3>About Me</h3>
        <p>
          I am a software developer from Lucknow, India. I have worked on and published several Android Apps, which are available on the <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/developer?id=Siddharth+Seth">Google Play Store</a> and on my <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/chrome289">Github page</a>.
          </p>
        <p>
          My Android projects are done using Kotlin or Java and Node.js is my choice of backend environment. Besides these I have experience in working on Windows' WPF and Console applications using C# and Java. Most of my projects are Open-Source and the source codes are available on Github.
          </p>
        <h5>Outside the Tech World</h5>
        <p>
          I like going on long walks and being surrounded by nature. I am a self-confessed Europhile and have an intermediate knowledge of French(Peut-être?). I also follow F1 Racing and read Fiction Books in my past-time.
          </p>
        <p>
          Do check out my <a onClick={this.handleProjectsClick}>Projects</a> and <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/0Byk0UVxfw3WaSy1IRDBrbHBQMEU/view?usp=sharing">Résumé</a> and get in touch if you find it interesting.
          </p>
          <hr />
      </div>
    )
  }
}