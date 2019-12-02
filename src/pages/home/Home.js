import React, { useEffect, useContext } from 'react';
import ProjectCard from 'components/projectcard/ProjectCard';
import GitHubCard from 'components/githubcard/GitHubCard';
import { Link } from 'react-router-dom';
import HomeProfilePic from 'pages/home/HomeProfilePic';
import { CTX } from 'context/Store';

import './Home.scss';

const Home = () => {
  const [, updateState] = useContext(CTX);

  useEffect(() => {
    updateState({
      type: 'UPDATE_CURRENT_PAGE',
      payload: { currentPage: 'home' }
    });
  }, []);
  return (
    <>
      <div className='home-container'>
        <div className='home-innercontainer'>
          <div className='home-infocontainer'>
            <HomeProfilePic />
            <h1 className='home-name'>Thomas Foydel</h1>
            <h6 className='home-email'>thomasjfoydel@gmail.com</h6>
          </div>
          <div className='home-cardcontainer-container'>
            <Link to='/projects'>
              <div className='projectcard-container'>
                <ProjectCard />
              </div>
            </Link>
            <a href='https://github.com/ThomasFoydel'>
              <div className='githubcard-container'>
                <GitHubCard />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
