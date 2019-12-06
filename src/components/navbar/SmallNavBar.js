import React, { useState, useContext } from 'react';
import Bars from 'img/bars.png';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import { CTX } from 'context/Store';

function SmallNavBar() {
  const [appState] = useContext(CTX);
  const [openFullNavBar, setOpenFullNavBar] = useState(false);
  const [displayLinks, setDisplayLinks] = useState(false);
  const { currentPage } = appState;
  const handleClick = () => {
    if (openFullNavBar) {
      setDisplayLinks(false);
      setOpenFullNavBar(false);
    }

    if (!openFullNavBar) {
      setOpenFullNavBar(true);
      setTimeout(() => {
        setDisplayLinks(true);
      }, 400);
    }
  };

  const smallNavBarAnimation = useSpring({
    height: openFullNavBar ? '17.3rem' : '6rem',
    config: config.wobbly
  });

  const smallNavBarLinkAnimation = useSpring({
    marginLeft: displayLinks ? 0 : -300,
    config: config.wobbly
  });
  return (
    <animated.div
      className={`smallnavbar-container`}
      style={smallNavBarAnimation}
    >
      <div>
        <div
          className={`smallnavbar-link ${currentPage === 'home' &&
            'currentSmallNavBarPage'}`}
        >
          <Link to='/'>
            <div onClick={openFullNavBar ? handleClick : null}>
              Thomas Foydel
            </div>
          </Link>
        </div>
        <img
          src={Bars}
          alt='open full menu'
          className={`smallnavbar-barsicon ${openFullNavBar &&
            'smallnavbargraybar'}`}
          onClick={handleClick}
        />
        {openFullNavBar && (
          <>
            {/* <div className='smallnavbar-link'>
              <Link to='/'>Thomas Foydel</Link>
            </div> */}
            <animated.div
              className={`smallnavbar-link ${currentPage === 'projects' &&
                'currentSmallNavBarPage'}`}
              style={smallNavBarLinkAnimation}
            >
              <Link to='/projects'>
                {' '}
                <div onClick={handleClick}>Projects</div>
              </Link>
            </animated.div>
            <animated.div
              className={`smallnavbar-link ${currentPage === 'contact' &&
                'currentSmallNavBarPage'}`}
              style={smallNavBarLinkAnimation}
            >
              <Link to='/contact'>
                {' '}
                <div onClick={handleClick}>Contact</div>
              </Link>
            </animated.div>
            <animated.div
              className={`smallnavbar-link ${currentPage === 'about' &&
                'currentSmallNavBarPage'}`}
              style={smallNavBarLinkAnimation}
            >
              <Link to='/about'>
                {' '}
                <div onClick={handleClick}>About</div>
              </Link>
            </animated.div>
          </>
        )}
      </div>
    </animated.div>
  );
}

export default SmallNavBar;
