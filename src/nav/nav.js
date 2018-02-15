import React from 'react';
import Menu from './side-menu';
import { Link } from 'react-router';

export default function Nav ({showMenu, toggleMenu}) {
    return(
      <div id="nav-bar">
        <img id="icon" alt="credit: Eucalyp" src="/images/hostel-icon.svg" />
        <img className="nav-button" src="/images/menu.svg" onClick={() => toggleMenu()}/>
        {showMenu && <Menu />}
      </div>
    )
}
