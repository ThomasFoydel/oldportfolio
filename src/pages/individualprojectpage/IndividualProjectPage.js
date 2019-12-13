import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import IndividualProjectData from 'pages/individualprojectpage/IndividualProjectData';
import LinkIcon from 'pages/individualprojectpage/LinkIcon';
import ReactIcon from 'img/reacticon.png';
import MongoDBIcon from 'img/mongodbicon.svg';
import NodeIcon from 'img/nodeicon.svg';
import SocketIOIcon from 'img/socketioicon.svg';

import { CTX } from 'context/Store';

import './IndividualProjectPage.scss';

const IndividualProjectPage = ({ match }) => {
  const page = match.params.page;
  const filtered = IndividualProjectData.filter(
    project => project.matchParam === page
  );
  const currentPage = filtered[0];

  const [, updateState] = useContext(CTX);
  const [displayInfoBar, setDisplayInfoBar] = useState(true);

  useEffect(() => {
    updateState({
      type: 'UPDATE_CURRENT_PAGE',
      payload: { currentPage: 'projects' }
    });
  }, []);

  const animationProps = useSpring({
    from: { opacity: 0, left: -500 },
    position: 'absolute',
    left: displayInfoBar ? 0 : -500,
    opacity: displayInfoBar ? 1 : 0,
    config: config.wobbly
  });

  const reverseAnimationProps = useSpring({
    from: { opacity: 0, left: -500 },
    position: 'absolute',
    left: displayInfoBar ? -500 : 0,
    opacity: displayInfoBar ? 0 : 1,
    config: config.wobbly
  });

  return (
    <div
      className={`individualprojectpagecontainer ${currentPage.backgroundClass}`}
    >
      {!displayInfoBar && (
        <animated.div style={reverseAnimationProps}>
          <div
            className='individualprojectpage-showsidebarbutton'
            onClick={() => setDisplayInfoBar(true)}
          >
            show sidebar
          </div>
        </animated.div>
      )}
      <animated.div style={animationProps}>
        <div className='individualprojectpage-innercontainer'>
          <a
            href={currentPage.herokuLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='individualprojectpagetitle'>
              {currentPage.title}
            </div>
          </a>
          <hr className='individualprojectpageline' />
          <div
            className='individualprojectpage-hidesidebarbutton'
            onClick={() => setDisplayInfoBar(!displayInfoBar)}
          >
            hide info box
          </div>
          <div className='individualprojectpageimganddesc'>
            <div className='individualprojectpagedescription'>
              <div className='individualprojectpagefeatures'>
                {currentPage.description}

                <br />
                <ul className='individualprojectpagefeaturelist'>
                  {currentPage.featuresList.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className='githubandherokucontainer'>
                <LinkIcon githubLink={currentPage.githubLink} />
                <LinkIcon herokuLink={currentPage.herokuLink} />
              </div>

              <div className='individualprojectpagetechnologies'>
                Made with the following technologies: <br />
                <div className='flex'>
                  <ul className='individualprojectpagetechnologylist'>
                    {currentPage.technologiesList1.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <ul className='individualprojectpagetechnologylist'>
                    {currentPage.technologiesList2.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className='individualprojectpage-iconcontainer'>
                  <img
                    style={{ height: '5rem', marginRight: '-1.5rem' }}
                    src={ReactIcon}
                  />
                  <img
                    style={{ height: '5rem', marginRight: '.5rem' }}
                    src={MongoDBIcon}
                  />
                  <img
                    style={{ height: '5rem', marginRight: '1.5rem' }}
                    src={NodeIcon}
                  />
                  {currentPage.matchParam !== 'flashcardapp' && (
                    <img
                      style={{ height: '5rem', marginRight: '1rem' }}
                      src={SocketIOIcon}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default IndividualProjectPage;
