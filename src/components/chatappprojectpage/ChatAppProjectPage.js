import React, { useEffect, useContext } from 'react';
import { CTX } from 'context/Store';

import './ChatAppProjectPage.scss';

const ChatAppProjectPage = () => {
  const [, updateState] = useContext(CTX);

  useEffect(() => {
    updateState({
      type: 'UPDATE_CURRENT_PAGE',
      payload: { currentPage: 'projects' }
    });
  }, []);
  return (
    <div className='chatappprojectpagecontainer'>
      <div className='chatappprojectpage-innercontainer'>
        <a
          href='https://socketchat2019.herokuapp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='chatappprojectpagetitle'>Chat App Project</div>
        </a>
        <hr className='chatappprojectpageline' />
        <div className='chatappprojectpageimganddesc'>
          <div className='chatappprojectpagedescription'>
            <div className='chatappprojectpagefeatures'>
              A live chat app built in MERN stack with socket.io: <br />
              <ul className='chatappprojectpagefeaturelist'>
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

            <div className='chatappprojectpagetechnologies'>
              Made with the following technologies: <br />
              <div className='flex'>
                <ul className='chatappprojectpagetechnologylist'>
                  <li>Node</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Express</li>
                  <li>Grid-FS</li>
                  <li>Mongo DB</li>
                </ul>
                <ul className='chatappprojectpagetechnologylist'>
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

export default ChatAppProjectPage;

// import React, { useEffect, useContext } from 'react';
// import './ChatAppProjectPage.scss';
// import ChatAppScreenShot from 'img/chatapp.png';
// import { CTX } from 'context/Store';

// import ScreenCapture from '../../img/screencapture.gif';

// const ChatAppProjectPage = () => {
//   const [, updateState] = useContext(CTX);

//   useEffect(() => {
//     updateState({
//       type: 'UPDATE_CURRENT_PAGE',
//       payload: { currentPage: 'projects' }
//     });
//   }, []);
//   return (
//     <div className='chatappprojectpagecontainer'>
//       <a href='https://socketchat2019.herokuapp.com' target='_blank'>
//         <div className='chatappprojectpagetitle'>Chat App Project</div>
//       </a>
//       <hr className='chatappprojectpageline' />
//       <div className='chatappprojectpageimganddesc'>
//         <a
//           href='https://socketchat2019.herokuapp.com'
//           target='_blank'
//           className='chatappprojectpagelink'
//         >
//           <img src={ChatAppScreenShot} className='chatappprojectimage' />
//         </a>
//         <div className='chatappprojectpage-description'>
//           <div className='chatappprojectpagefeatures'>
//             A live chat app built in MERN stack with socket.io.
//           </div>
//         </div>
//       </div>
//       <div className='chatappprojectpage-description2-container'>
//         <div className='chatappprojectpage-description2'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
//           impedit, exercitationem tempore, in ex magnam veritatis magni
//           consectetur nemo architecto non voluptas accusantium neque ad dolorum
//           dolorem corrupti itaque eligendi?
//         </div>
//         <img src={ScreenCapture} style={{ height: '30rem', width: '30rem' }} />
//       </div>
//     </div>
//   );
// };

// export default ChatAppProjectPage;
