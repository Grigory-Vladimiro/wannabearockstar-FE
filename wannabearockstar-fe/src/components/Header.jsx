import React from 'react';

export default function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="site-logo">
              <h2>Musico</h2>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <nav className="main-menu">
              <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Albums</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}