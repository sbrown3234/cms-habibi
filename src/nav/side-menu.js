import React from 'react';
import { Link } from 'react-router';

export default function Menu() {
  return (
    <div className="links">
      <Link to="/about">About</Link>
      <Link to='/rooms'>Rooms</Link>
      <Link to='/FAQ'>FAQ</Link>
    </div>
  )
}
