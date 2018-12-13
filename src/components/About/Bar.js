import React from 'react';
import './Bar.css';

const Bar = (props) => {
  const style = {
    width: `${props.percent}%`,
    height: '100%',
    background: '#a45117'
  };
  return (
    <div className='bar'>
      <span className='bar-title'>{props.item}</span>
      <div className='fill-container'>
        <div className='bar-fill' style={style}></div>
      </div>
      {<span className='percentage'>{props.percent}%</span>}
    </div>
  )
}

export default Bar;