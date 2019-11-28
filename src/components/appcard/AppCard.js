import React from 'react';
import { useSpring, animated } from 'react-spring';
import './AppCard.scss';

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 20,
  -(x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AppCard = ({ cardClass }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 380, friction: 40 }
  }));

  return (
    <animated.div
      className={cardClass}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
};

export default AppCard;
