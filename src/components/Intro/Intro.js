import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div id='home'>
      <h1>Hello, my name is <span>Jake Burton</span>.</h1>
      <h1>I am a web developer.</h1>
      <button>More about me  <i className="fas fa-arrow-circle-right"></i></button>
    </div>
  );
}

export default Intro;
