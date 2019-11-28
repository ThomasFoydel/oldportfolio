import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBarLink from 'components/navbar/NavBarLink';

import { CTX } from 'context/Store';

import './NavBar.scss';

const NavBar = () => {
  const [appState, updateState] = useContext(CTX);

  const setCurrentPage = e => {
    if (e.target.name) {
      updateState({
        type: 'UPDATE_CURRENT_PAGE',
        payload: { currentPage: e.target.name }
      });
    }
  };

  const currentPage = appState.currentPage;

  return (
    <div className='navbar-container'>
      <ul className='navbar'>
        <Link onClick={setCurrentPage} name='home' to='/'>
          <NavBarLink
            linkName='Thomas Foydel'
            isCurrentPage={currentPage === 'home'}
          />
        </Link>

        <Link onClick={setCurrentPage} name='projects' to='/projects'>
          <NavBarLink
            linkName='Projects'
            isCurrentPage={currentPage === 'projects'}
          />
        </Link>

        <Link onClick={setCurrentPage} name='contact' to='/contact'>
          <NavBarLink
            linkName='Contact'
            isCurrentPage={currentPage === 'contact'}
          />
        </Link>
        <Link onClick={setCurrentPage} name='about' to='/about'>
          <NavBarLink
            linkName='About'
            isCurrentPage={currentPage === 'about'}
          />
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
