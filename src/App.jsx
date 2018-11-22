import React, { Component } from 'react';
import './App.css';
import Projects from './Projects';
import Home from './Home';
import Navbar from './Navbar';
import Cover from './Cover';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeOpen: true,
      isProjectsOpen: false
    }

    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
  }

  handleHomeClick() {
    let value = this.state.isHomeOpen;
    if (!value) {
      this.setState({
        isHomeOpen: true,
        isProjectsOpen: false
      })
    }
  }

  handleProjectsClick() {
    let value = this.state.isProjectsOpen;
    if (!value) {
      this.setState({
        isHomeOpen: false,
        isProjectsOpen: true
      })
    }
  }

  render() {
    let content
    if (this.state.isHomeOpen) {
      content = <Home onProjectsClick={this.handleProjectsClick}/>
    } else {
      content = <Projects />
    }

    return (
      <div className="App">
        <Cover />
        <div className="col-7 right-container">
          <Navbar onHomeClick={this.handleHomeClick} onProjectsClick={
            this.handleProjectsClick
          } onResumeClick={this.handleResumeClick} />
          {content}
        </div>
      </div>
    );
  }
}

export default App;
