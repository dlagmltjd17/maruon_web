import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <a href="/">Home</a><br />
          <a href="/about">About</a>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;