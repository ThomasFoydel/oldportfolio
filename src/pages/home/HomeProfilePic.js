import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
// import { config } from 'react-spring';
import photo from 'img/me.jpg';

const HomeProfilePic = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <Spring
        to={{
          transform: hover ? 'rotate(180deg)' : 'rotate(0deg)',
          background: hover ? 'black' : 'rgba(161, 161, 161, 0)',
          opacity: hover ? '0' : '1'
        }}
        // config={{ tension: 280, friction: 120, mass: 25 }}
        config={{ tension: 280, friction: 70, mass: 25 }}
      >
        {props => (
          <Link to='/about'>
            <div className='home-profilephotocontainer'>
              <div className='home-profilephototext'>about me</div>
              <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={props}
                src={photo}
                alt='about me'
                className='home-profilephoto'
              />
            </div>
          </Link>
        )}
      </Spring>
    </div>
  );
};

export default HomeProfilePic;
