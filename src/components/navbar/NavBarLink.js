import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const NavBarLink = ({ linkName, isCurrentPage }) => {
  const [hover, setHover] = useState(false);

  let currentBackgrounds = hover
    ? 'rgba(156, 9, 9, 0.911)'
    : 'rgba(194, 12, 12, 0.911)';
  let notCurrentBackgrounds = hover ? 'rgb(131, 99, 99)' : 'rgba(0, 0, 0, 0)';

  const animationProps = useSpring({
    background: isCurrentPage ? currentBackgrounds : notCurrentBackgrounds,
    width: isCurrentPage ? '23rem' : '14rem',
    // textAlign: 'center',
    config: config.smooth
  });
  return (
    <animated.div
      style={animationProps}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className='navbar-listitem'>{linkName}</div>
    </animated.div>
  );
};

export default NavBarLink;
