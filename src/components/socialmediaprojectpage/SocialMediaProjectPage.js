import React, { useEffect, useContext } from 'react';
import { CTX } from 'context/Store';
import GitHub from 'img/githubdark.png';
import Heroku from 'img/heroku.svg';
import './SocialMediaProjectPage.scss';

const SocialMediaProjectPage = () => {
  const [, updateState] = useContext(CTX);

  useEffect(() => {
    updateState({
      type: 'UPDATE_CURRENT_PAGE',
      payload: { currentPage: 'projects' }
    });
  }, []);
  return (
    <div className='socialmediaprojectpagecontainer'>
      <div className='socialmediaprojectpage-innercontainer'>
        <a href='http://mernstacksocialmedia.herokuapp.com' target='_blank'>
          <div className='socialmediaprojectpagetitle'>
            Social Media Project
          </div>
        </a>
        <hr className='socialmediaprojectpageline' />
        <div className='socialmediaprojectpageimganddesc'>
          <div className='socialmediaprojectpagedescription'>
            <div className='socialmediaprojectpagefeatures'>
              A MERN stack app with basic social media functionality: <br />
              <ul className='socialmediaprojectpagefeaturelist'>
                <li>manage profile info and pictures</li>
                <li>write posts with or without images</li>
                <li>comment on posts</li>
                <li>post statuses</li>
                <li>edit posts or comments</li>
                <li>like/dislike posts, comments, or statuses</li>
                <li>send/accept/reject friend requests</li>
                <li>send private chat messages to friends</li>
                <li>de-friend</li>
              </ul>
            </div>

            <div className='flex'>
              <div className='socialmediaprojectpage-githublink'>
                <img src={GitHub} style={{ height: '14rem' }} />
                <h4>GitHub Code</h4>
              </div>

              <div className='socialmediaprojectpage-herokulink'>
                <img src={Heroku} style={{ height: '14rem' }} />
                <h4>Heroku Page</h4>
              </div>
            </div>

            <div className='socialmediaprojectpagetechnologies'>
              Made with the following technologies: <br />
              <div className='flex'>
                <ul className='socialmediaprojectpagetechnologylist'>
                  <li>Node</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Grid-FS</li>
                  <li>Express</li>
                  <li>Mongo DB</li>
                </ul>
                <ul className='socialmediaprojectpagetechnologylist'>
                  <li>SCSS</li>
                  <li>Multer</li>
                  <li>Socket.io</li>
                  <li>Mongoose</li>
                  <li>React-Spring</li>
                  <li>JSON Web Token</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProjectPage;
