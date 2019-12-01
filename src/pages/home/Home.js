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
        <div className='flex'>
          <div className='home-infocontainer'>
            <HomeProfilePic />
            <h1 className='home-name'>Thomas Foydel</h1>
            {/* <h2 className='home-jobtitle'>web developer</h2> */}
            <h6 className='home-email'>thomasjfoydel@gmail.com</h6>
          </div>
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
    </>
  );
};

export default Home;
