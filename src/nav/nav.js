import React from 'react';
import { Link } from 'react-router';

export default function Nav (props) {
    return(
      <div id="nav-bar">
        <img alt="credit: Eucalyp" src="/images/hostel-icon.svg" />
        <div className="links">
          <Link to="/about">About</Link>
          <Link to='/rooms'>Rooms</Link>
          <Link to='/FAQ'>FAQ</Link>
        </div>
      </div>
    )
}
