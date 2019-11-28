import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import { CTX } from 'context/Store';

import './AboutPage.scss';

const AboutPage = () => {
  const [, updateState] = useContext(CTX);

  useEffect(() => {
    updateState({
      type: 'UPDATE_CURRENT_PAGE',
      payload: { currentPage: 'about' }
    });
  }, []);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBio(true);
    }, 600);
  }, []);

  const animationProps = useSpring({
    opacity: showBio ? 1 : 0,
    left: showBio ? '0' : '-50rem',
    // color: showBio ? 'black' : 'white',
    // overflow: 'hidden',

    // from: { opacity: 0, marginTop: -500 },
    config: config.molasses
  });
  return (
    <div>
      <div className='aboutpage-backgroundimage'></div>
      <animated.div style={animationProps}>
        <div className='aboutparagraph'>
          I am an aspiring developer based in Chicago. I build{' '}
          <Link to='/projects' className='aboutpage-projectslink'>
            fullstack and frontend projects
          </Link>{' '}
          mostly in MERN stack, though I am interested in all of JavaScript. I
          currently work as a therapist for children diagnosed with autism:
          implementing behavior interventions, collecting and graphing
          behavioral data, etc. I have a bachelor of arts in psychology and
          sociology from Roosevelt University. When I am not coding or working,
          I train jiu-jitsu.
        </div>
      </animated.div>
    </div>
  );
};

export default AboutPage;
