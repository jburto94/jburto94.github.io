import React from 'react';
import './About.css';
import BarDisplay from './BarDisplay';

const About = () => {
  return (
    <div id='about' className='section'>
      <h1>About Me</h1>
      <div className='title-line'></div>
      <div className='about-info'>
        <div className='personal'>
          <img src='./images/profile-pic.png' alt='Jake Burton'></img>
          <h3>Who am I?</h3>
          <p>I am a web developer in Greenville, SC. Looking to improve myself and work 
          with others, I hope to gain more professional experience. Always looking to learn
          and challenge myself with new technologies.</p>
        </div>
        <BarDisplay />
      </div>
    </div>
  )
}

export default About;