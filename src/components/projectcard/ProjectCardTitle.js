import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { config } from 'react-spring';

const ProjectCardTitle = ({ content, hover }) => {
  return (
    <div className='projectcardtitle'>
      <Spring
        to={{
          color: hover ? 'black' : 'white',
          letterSpacing: hover ? '0.2rem' : '0rem',
          transform: hover ? 'scale(1.08)' : 'scale(1)',
          background: hover
            ? 'rgba(250, 250, 250, 0.5)'
            : 'rgba(250, 250, 250, 0)'
        }}
        config={config.wobbly}
      >
        {props => (
          <div className='' style={props}>
            {content}
          </div>
        )}
      </Spring>
    </div>
  );
};

export default ProjectCardTitle;
