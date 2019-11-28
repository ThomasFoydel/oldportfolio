import React, { useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import Home from 'pages/home/Home';
import Contact from 'pages/contact/Contact';
import NavBar from 'components/navbar/NavBar';
import SocialMediaProjectPage from 'components/socialmediaprojectpage/SocialMediaProjectPage';
import ChatAppProjectPage from 'components/chatappprojectpage/ChatAppProjectPage';
import AboutPage from 'pages/about/AboutPage';
import ProjectPage from 'components/projectpage/ProjectPage';

import './App.scss';
import { useTransition, animated, config } from 'react-spring';

function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100vw',
      top: 0,
      transform: 'translate(100%, 0)'
    },
    enter: {
      opacity: 1,
      position: 'absolute',
      width: '100vw',
      top: 0,
      transform: 'translate(0%, 0)'
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      width: '100vw',
      top: 0,
      transform: 'translate(-100%, 0)'
    },
    config: config.smooth
  });

  return (
    <>
      <NavBar />
      <div className='container-fluid'>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={AboutPage} />
              <Route path='/projects' component={ProjectPage} />
              <Route
                exact
                path='/socialmediaapp'
                component={SocialMediaProjectPage}
              />
              <Route exact path='/chatapp' component={ChatAppProjectPage} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </>
  );
}

export default App;
