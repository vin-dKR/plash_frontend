import React from 'react';
import './Navbar.css';
import './responsive.css';

function Navbar() {
  return (
    <div className="stic__nav">
      <div className='navbar'>

          <img src="https://i.ibb.co/X2rsKwZ/Plash-Logo-2.png" alt="jjj" />

          <div className="post-btn">
            <a className='post-btn-a' href="/contact">Contact</a>
          </div>
      </div>
    </div>
  )
}

export default Navbar