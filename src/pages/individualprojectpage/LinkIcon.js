import React, { useState } from 'react';
import Heroku from 'img/heroku.svg';
import HerokuRed from 'img/herokured.svg';
import GitHub from 'img/github.svg';
import GitHubRed from 'img/githubred.svg';
import { useSpring, animated, config } from 'react-spring';

const LinkIcon = ({ herokuLink, githubLink }) => {
  const [red, setRed] = useState(false);
  const redAnimationProps = useSpring({
    opacity: red ? 1 : 0,
    transform: red ? ' translateY(-0.8rem)' : ' translateY(0rem)',
    position: 'absolute',
    config: config.wobbly
  });
  const blackAnimationProps = useSpring({
    opacity: red ? 0 : 1,
    position: 'absolute',
    config: config.wobbly
  });

  const handleMouseOver = () => {
    setRed(true);
  };

  const handleMouseOut = () => {
    setRed(false);
  };

  return (
    <div
      className={`individualprojectpage-${
        herokuLink ? 'herokulink' : 'githublink'
      }`}
    >
      <a
        href={herokuLink ? herokuLink : githubLink}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <animated.div style={redAnimationProps}>
            <img src={herokuLink ? HerokuRed : GitHubRed}></img>
          </animated.div>
          <animated.div style={blackAnimationProps}>
            <img src={herokuLink ? Heroku : GitHub}></img>
          </animated.div>
          <div className='linkicon-linktitle'>
            {herokuLink ? <h4>Live Page</h4> : <h4>GitHub Code</h4>}
          </div>
        </div>
      </a>
    </div>
  );
};

export default LinkIcon;
