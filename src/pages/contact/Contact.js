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
          <IndividualContact contact='linkedin'></IndividualContact>
        </li>
        <li className='contact-listitem'>
          <IndividualContact contact='github'></IndividualContact>
        </li>
        <li className='contact-listitem'>
          <IndividualContact contact='other'></IndividualContact>
        </li>
        <li className='contact-listitem'>
          <IndividualContact contact='other'></IndividualContact>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
