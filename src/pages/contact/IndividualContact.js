import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { config } from 'react-spring';

const IndividualContact = ({ contact }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='individualcontact'
    >
      <Spring
        to={{
          color: hover ? 'black' : 'white',
          transform: hover
            ? 'scale(1.1) translateX(-8%)'
            : 'scale(1) translateX(0%)'
        }}
        config={config.wobbly}
      >
        {props => (
          <div style={props} className='individualcontactname'>
            {contact}
          </div>
        )}
      </Spring>
      <Spring
        from={{ opacity: '0' }}
        to={{
          opacity: hover ? '1' : '0',
          width: hover ? '100%' : '0%',
          backgroundColor: hover ? 'black' : 'white'
        }}
        config={config.wobbly}
      >
        {props => (
          <div style={props} className='individualcontactunderline'></div>
        )}
      </Spring>
    </div>
  );
};

export default IndividualContact;
