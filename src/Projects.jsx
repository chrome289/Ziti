import React, { Component } from 'react';
import './App.css';

export default class Projects extends Component {
  render() {
    return (
      <div className="content">
        <h3>Projects</h3>
        <div className="projects">
          <div className="project">
            <h4>---Espresso---</h4>
            <p>An Android app that helps you track running sessions. Additionally you can choose to follow routes, workout plans or goals. Previous sessions can be viewed with elevation, pace graphs and other stats. The server runs on Node.js framework and is hosted on AWS.</p>
            <div className="project-github">
              <i className="media-buttons fab fa-github" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/Espresso">Check out on Github</a>
            </div>
            <div className="project-install">
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.siddharth.espresso">Get the App</a>
            </div>
            <hr />
          </div>

          <div className="project">
            <h4>---Crostata---</h4>
            <p>A Social Media platform for a fictional Communist Republic. Comes pre-packaged with a full suite of censorship and propaganda tools. Node.js is used for server code and MongoDB for the database.</p>
            <div className="project-github">
              <i className="media-buttons fab fa-github" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/Crostata">Check out on Github</a>
            </div>
            <div className="project-install">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/Crostata/releases">Get the App</a>
            </div>
            <hr />
          </div>

          <div className="project">
            <h4>---Trainhopper---</h4>
            <p>Android app to show both direct & indirect routes between two stations on a particular date, time & other user-specified criteria.</p>
            <div className="project-github">
              <i className="media-buttons fab fa-github" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/TrainHopper">Check out on Github</a>
            </div>
            <div className="project-install">
              <a id="hidden">Get the App</a>
            </div>
            <hr />
          </div>

          <div className="project">
            <h4>---Panettone---</h4>
            <p>Android app to resize, crop, rotate and compress images.</p>
            <div className="project-github">
              <i className="media-buttons fab fa-github" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/Panettone">Check out on Github</a>
            </div>
            <div className="project-install">
              <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=xyz.siddharthseth.panettone">Get the App</a>
            </div>
            <hr />
          </div>

          <div className="project">
            <h4>---Node Chat---</h4>
            <p>A Whatsapp-like messaging app for sending messages to your Google Contacts. Media attachments & location can also be shared from within the chat window.</p>
            <div className="project-github">
              <i className="media-buttons fab fa-github" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/Ravioli">Check out on Github</a>
            </div>
            <div className="project-install">
              <a id="hidden">Get the App</a>
            </div>
            <hr />
          </div>

          <div className="project">
            <h4>---AESCrypt---</h4>
            <p>A Windows application for encrypting and decrypting files and folders.</p>
            <div className="project-github">
              <i className="media-buttons fab fa-github" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/Minestrone">Check out on Github</a>
            </div>
            <div className="project-install">
              <a id="hidden">Get the App</a>
            </div>
            <hr />
          </div>

          <div className="project">
            <h4>---NetStats---</h4>
            <p>A Windows and Android app for monitoring internet usage and setting data alarms.</p>
            <div className="project-github">
              <i className="media-buttons fab fa-github" />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrome289/NetStats-Android">Check out on Github</a>
            </div>
            <div className="project-install">
              <a id="hidden">Get the App</a>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}