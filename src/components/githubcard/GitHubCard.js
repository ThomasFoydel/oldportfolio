import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './GitHubCard.scss';

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 20,
  -(x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const GitHubCard = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  }, []);

  const fadeInProps = useSpring({
    opacity: display ? 1 : 0,
    marginTop: display ? 0 : 400,
    config: config.smooth
  });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 380, friction: 40 }
  }));

  return (
    <animated.div style={fadeInProps}>
      <animated.div
        className='githubcard'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </animated.div>
  );
};

export default GitHubCard;
