import React from 'react';
import loader from '../assets/images/loader.gif';
import './Spinner.css';

export const Spinner = ({ status }) => (
  <div className='Spinner'>
    {
      status === 'PENDING' ?
        <img
          src={loader}
          className='Spinner-gif'
          alt="Loading..."
        />
      : <span></span>
    }
  </div>
);

export default Spinner;
