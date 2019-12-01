import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppCard from 'components/appcard/AppCard';
import ProjectCardTitle from 'components/projectcard/ProjectCardTitle';
import { useSpring, animated, config } from 'react-spring';
import { CTX } from 'context/Store';

import './ProjectPage.scss';
const ProjectPage = () => {
  const [, updateState] = useContext(CTX);
  const [display, setDisplay] = useState(false);

  const fadeInProps = useSpring({
    opacity: display ? 1 : 0,
    marginTop: display ? 0 : 400,
    config: config.smooth
  });

  useEffect(() => {
    updateState({
      type: 'UPDATE_CURRENT_PAGE',
      payload: { currentPage: 'projects' }
    });
    setTimeout(() => {
      setDisplay(true);
    }, 800);
  }, []);
  const [socialMediaHover, setSocialMediaHover] = useState(false);
  const [chatAppHover, setChatAppHover] = useState(false);

  const handleSocialMediaEnter = () => {
    setSocialMediaHover(true);
  };
  const handleSocialMediaLeave = () => {
    setSocialMediaHover(false);
  };

  const handlePlaceholderEnter = () => {
    setChatAppHover(true);
  };
  const handlePlaceholderLeave = () => {
    setChatAppHover(false);
  };

  return (
    <div className='projectpage-outercontainer'>
      <div className='projectpage-container'>
        <div className='projectpage-grid'>
          <div className='projectpage-grid-title'>recent projects</div>

          <Link to='/project/socialmediaapp'>
            <animated.div
              style={fadeInProps}
              onMouseEnter={handleSocialMediaEnter}
              onMouseLeave={handleSocialMediaLeave}
              className='projectpage-gridproject1'
            >
              <ProjectCardTitle
                hover={socialMediaHover}
                content='Social Media'
              />

              <AppCard cardClass='socialmediacard' hover={socialMediaHover} />
            </animated.div>
          </Link>
          <Link to='/project/chatapp'>
            <animated.div
              className='projectpage-gridproject2'
              onMouseEnter={handlePlaceholderEnter}
              onMouseLeave={handlePlaceholderLeave}
              style={fadeInProps}
            >
              <ProjectCardTitle hover={chatAppHover} content='Chat App' />

              <AppCard cardClass='chatappcard' hover={chatAppHover} />
            </animated.div>
          </Link>
          <div className='projectpage-gridproject3' />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
