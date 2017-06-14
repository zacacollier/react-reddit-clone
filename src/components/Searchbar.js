import React from 'react';
import './Searchbar.css';

const Searchbar = () => (
  <div className='Searchbar'>
    <form className='Searchbar-form'>
      <input
        type='text'
        className='Searchbar-input'
      />
    </form>
  </div>
);

export default Searchbar;
