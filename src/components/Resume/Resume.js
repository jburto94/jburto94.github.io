import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div id='resume' className='section'>
      <h1>Resume</h1>
      <div className='title-line'></div>
      <h3>You can download my resume here:</h3>
      <a href='./images/dev_resume.pdf' download>Download as PDF</a>
    </div>
  )
}

export default Resume;