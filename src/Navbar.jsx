import React, { Component } from 'react';
import './App.jsx';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
  }

  handleHomeClick() {
    this.props.onHomeClick()
  }

  handleProjectsClick() {
    this.props.onProjectsClick()
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="flexbox-left">
          <a onClick={this.handleHomeClick}>HOME</a>
        </div>
        <div className="flexbox-right">
          <a onClick={this.handleProjectsClick}>PROJECTS</a>
          <a  target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/0Byk0UVxfw3WaSy1IRDBrbHBQMEU/view?usp=sharing">RÉSUMÉ</a>
        </div>
      </div>
    )
  }
}