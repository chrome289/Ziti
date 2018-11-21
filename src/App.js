import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-5 left-container">
          <div>
            <h1>
              Hello
            </h1>
            <h3>
              I'm Siddharth Seth.
              </h3>
            <h4>
              Full Stack Developer
            </h4>
          </div>
          <div className="list-inline">
            <p>Reach me at <a rel="noopener noreferrer" target="_blank" href="mailto:mail@siddharthseth.xyz">mail@siddharthseth.xyz</a></p>
            <h5>or through</h5>
            <div>
              <a href="#" className="media-buttons fab fa-github"></a>
              <a href="#" className="media-buttons fab fa-instagram"></a>
              <a href="#" className="media-buttons fab fa-linkedin"></a>
            </div>
          </div>
        </div>
        <div className="col-7 right-container">
          <div className="nav-bar">
            {/* <div className="flexbox-left">
              <h4>SIDDHARTH SETH</h4>
            </div> */}
            <div className="flexbox-right">
              <button href="#projects">PROJECTS</button>
              <button href="#resume">RÉSUMÉ</button>
            </div>
          </div>
          <div className="content">
            <h3>About Me</h3>
            <p>
              I am a software developer from Lucknow, India. I have worked on and published several Android Apps, which are available on the Google Play Store and on my <a href="https://www.github.com/chrome289">Github page</a>.
          </p>
            <p>
              My Android projects are done using Kotlin or Java and Node.js is my choice of Server Runtime-Environment. Besides these I have experience in working on Windows' WPF and Console applications using C# and Java. Most of my projects are Open-Source and the source codes are available on Github.
          </p>
            <h5>Outside the Tech World</h5>
            <p>
              I like going on long walks and being surrounded by nature. I am a self-confessed Europhile and have an intermediate knowledge of French(Peut-être?). I also follow F1 Racing and read Fiction Books in my past-time.
          </p>
            <p>
              Do check out my Projects and Résumé above and get in touch if you find it interesting.
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
