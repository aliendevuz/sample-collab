import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <svg className="campus-logo" width="40" height="33" viewBox="0 0 78 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="72.6484" y="59.9019" width="5.09804" height="68.8235" transform="rotate(90 72.6484 59.9019)" fill="white"/>
            <rect x="28.04" y="25.6526" width="6.37255" height="36.9608" rx="2" fill="white"/>
            <rect x="58.6289" y="25.6526" width="6.37255" height="36.9608" rx="2" fill="white"/>
            <rect x="12.7461" y="25.6526" width="6.37255" height="36.9608" rx="2" fill="white"/>
            <rect x="43.335" y="25.6526" width="6.37255" height="36.9608" rx="2" fill="white"/>
            <path d="M65.7471 26.1768H11.998L38.8721 3.2832L65.7471 26.1768Z" stroke="white" stroke-width="5"/>
          </svg>
          <span className="logo-text">Campus App</span>
        </div>
        
        <nav className="nav-menu">
          <a href="#about" className="nav-link">About project</a>
          <a href="#how" className="nav-link">How it works</a>
          <a href="#feedback" className="nav-link">Feedbacks</a>
          <a href="#signin" className="nav-link">Sign in</a>
          <button className="get-started-btn">Get started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
