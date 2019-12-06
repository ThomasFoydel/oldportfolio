import React, { useState, useEffect, useContext } from 'react';
import { config } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import IndividualContact from 'pages/contact/IndividualContact';
import { CTX } from 'context/Store';
import './Contact.scss';

const Contact = () => {
  const [, updateState] = useContext(CTX);

  useEffect(() => {
    updateState({
      type: 'UPDATE_CURRENT_PAGE',
      payload: { currentPage: 'contact' }
    });
  }, []);
  const [openUp, setOpenUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenUp(true);
    }, 700);
  }, []);
  return (
    <>
      <div className='contactsmall-container'>
        <div className='contactsmall-imagecontainer' />
        <div className='contactsmall-linkcontainer'>
          <a
            className='contactsmall-link'
            href='https://www.linkedin.com/in/thomasfoydel'
            target='_blank'
            rel='noopener noreferrer'
          >
            linkedin
          </a>

          <a
            className='contactsmall-link'
            href='https://github.com/ThomasFoydel/'
            target='_blank'
            rel='noopener noreferrer'
          >
            github
          </a>

          <a
            className='contactsmall-link'
            href='mailto: thomasfoydel@gmail.com'
          >
            email
          </a>
        </div>
      </div>
      <div className='contact-outercontainer'>
        <div className='contact-container2'></div>
        <Spring
          from={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          to={{
            clipPath: openUp
              ? 'polygon(0 0, 85% 0, 60% 100%, 0 100%)'
              : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }}
          config={config.wobbly}
        >
          {props => (
            <div className='contact-container' style={props}>
              <div className='contact-listcontainer'>
                <h1 className='contact-title'>Contact</h1>
              </div>
            </div>
          )}
        </Spring>
        <ul className='contact-list'>
          <li className='contact-listitem'>
            <a
              href='https://www.linkedin.com/in/thomas-foydel-63aa74110/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IndividualContact contact='linkedin'></IndividualContact>
            </a>
          </li>
          <li className='contact-listitem'>
            <a
              href='https://github.com/ThomasFoydel/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IndividualContact contact='github'></IndividualContact>
            </a>
          </li>
          <li className='contact-listitem'>
            <a href='mailto: thomasfoydel@gmail.com'>
              <IndividualContact contact='email'></IndividualContact>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
