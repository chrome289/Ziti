import React, { Component } from 'react';
import './App.css';
import profileImage from './profile.jpg'
import image from './image.png'

let imageStyle = {
  backgroundImage: 'url(' + image + ')'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-container">
          <div>
            <h1>
              Hello
            </h1>
            <h3>
              I'm Siddharth Seth.
              <br />
              Full Stack Developer
            </h3>
          </div>
            <div className="list-inline">
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-github"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>
        <div className="right-container">
          <h3>
            Introduction
        </h3>
          <p>
            I work on projects on both Android OS and Windows but have special love for Android apps.

    The current one which is in active development is a Running app, Espresso and is available on Github and on Play Store. I have also worked server side on three projects, primarily using Node.js and have experience with working on AWS(EB, RDS & S3).
    Although I no longer actively work on Windows, in the past I have developed Desktop applications in both C# and Java.

    Do check out my projects above and my résumé below and get in touch if you find it interesting.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
