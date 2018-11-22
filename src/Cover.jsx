import React, { Component } from 'react';
import './App.css';

export default class Cover extends Component {
  render() {
    return (
      <div className="col-5 left-container">
        <div>
          <div className="center">
          <h1>Hello</h1>
          <h3>I'm Siddharth Seth.</h3>
          <h4>Full Stack Developer</h4>
          </div>
        </div>
        <div className="footer">
          <p>Reach me at <a target="_blank" rel="noopener noreferrer" href="mailto:mail@siddharthseth.xyz">mail@siddharthseth.xyz</a></p>
          <h5>or through</h5>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/chrome289" className="media-buttons fab fa-github"></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/siddharthseth289" className="media-buttons fab fa-instagram"></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/siddharth-seth-825153a7" className="media-buttons fab fa-linkedin"></a>
          </div>
        </div>
      </div>
    )
  }
}