import React from 'react';
import Bar from './Bar';
import './BarDisplay.css'

 const BarDisplay = () => {
  return (
    <div className='bar-display'>
      <Bar item='HTML' percent='100'/>
      <Bar item='CSS' percent='90'/>
      <Bar item='JavaScript' percent='80'/>
      <Bar item='React' percent='70'/>
      <Bar item='Node' percent='70'/>
      <Bar item='Git' percent='60'/>
      <Bar item='PostgreSQL' percent='50'/>
      <Bar item='MongoDB' percent='50'/>
    </div>
  );
}

export default BarDisplay;