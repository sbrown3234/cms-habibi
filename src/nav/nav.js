import React from 'react';
import { Link } from 'react-router';

export default function Nav (props) {
    return(
      <div id="nav-bar">
        <img id="icon" alt="credit: Eucalyp" src="/images/hostel-icon.svg" />
        <img className="nav-button" src="/images/menu.svg" />
      </div>
    )
}
