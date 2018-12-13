import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Resume />
      </div>
    );
  }
}

export default App;
