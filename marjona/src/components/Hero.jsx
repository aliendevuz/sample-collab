import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Your first campuse<br/><span className="highlight">platform app</span></h1>
          <p>LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
          <button className="start-btn">Start now</button>
        </div>
        
        <div className="hero-image">
          <svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
            {/* Pot - Orange */}
            <ellipse cx="80" cy="340" rx="50" ry="20" fill="#E8A23B"/>
            <path d="M 30 340 Q 30 360 80 370 Q 130 360 130 340" fill="#D68F2C"/>
            <rect x="35" y="280" width="90" height="60" fill="#E8A23B" rx="8"/>
            <ellipse cx="80" cy="280" rx="45" ry="15" fill="#F5B85C"/>
            
            {/* Plant Leaves - Green */}
            <path d="M 80 280 Q 60 220 50 140 Q 45 100 55 80" stroke="#1B7B3F" strokeWidth="12" fill="none" strokeLinecap="round"/>
            <path d="M 80 280 Q 100 220 110 140 Q 115 100 105 80" stroke="#2E9B57" strokeWidth="12" fill="none" strokeLinecap="round"/>
            <path d="M 80 280 Q 70 200 65 100" stroke="#1B7B3F" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <path d="M 80 280 Q 90 200 95 100" stroke="#2E9B57" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <ellipse cx="50" cy="85" rx="18" ry="22" fill="#2E9B57"/>
            <ellipse cx="110" cy="85" rx="18" ry="22" fill="#1B7B3F"/>
            
            {/* Red Book */}
            <rect x="160" y="260" width="70" height="95" fill="#C41E3A" rx="4"/>
            <rect x="167" y="267" width="56" height="81" fill="#DC143C" rx="2"/>
            <line x1="160" y1="275" x2="230" y2="275" stroke="#8B0000" strokeWidth="2"/>
            <circle cx="180" cy="310" r="4" fill="#FFD700"/>
            <circle cx="195" cy="310" r="4" fill="#FFD700"/>
            
            {/* Pink/Magenta Book */}
            <rect x="172" y="250" width="70" height="95" fill="#E91E63" rx="4" transform="rotate(-8 207 297)"/>
            <rect x="179" y="257" width="56" height="81" fill="#EC407A" rx="2" transform="rotate(-8 207 297)"/>
            <line x1="172" y1="265" x2="242" y2="265" stroke="#C2185B" strokeWidth="1.5" transform="rotate(-8 207 297)"/>
            
            {/* Yellow/Green Books Stack */}
            <rect x="190" y="270" width="60" height="85" fill="#9CCC65" rx="3"/>
            <rect x="195" y="275" width="50" height="75" fill="#AED581" rx="2"/>
            
            <rect x="200" y="280" width="60" height="85" fill="#FFC107" rx="3"/>
            <rect x="205" y="285" width="50" height="75" fill="#FFD54F" rx="2"/>
            
            {/* Books Spines/Binding */}
            <line x1="180" y1="265" x2="245" y2="265" stroke="#4A4A4A" strokeWidth="2"/>
            <line x1="185" y1="355" x2="245" y2="355" stroke="#2A2A2A" strokeWidth="1"/>
            
            {/* Glasses on Books */}
            <circle cx="215" cy="230" r="12" fill="none" stroke="#4A4A4A" strokeWidth="2.5"/>
            <circle cx="240" cy="230" r="12" fill="none" stroke="#4A4A4A" strokeWidth="2.5"/>
            <line x1="227" y1="230" x2="233" y2="230" stroke="#4A4A4A" strokeWidth="2.5"/>
            <path d="M 215 215 Q 227.5 205 240 215" stroke="#4A4A4A" strokeWidth="2.5" fill="none"/>
            
            {/* Cup - Green */}
            <rect x="280" y="285" width="55" height="70" fill="#9ACD32" rx="4"/>
            <ellipse cx="307.5" cy="285" rx="27.5" ry="12" fill="#B0E57C"/>
            <path d="M 335 295 Q 360 295 360 320 Q 360 345 335 345" stroke="#9ACD32" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <line x1="285" y1="310" x2="330" y2="310" stroke="#7CB92A" strokeWidth="1"/>
            
            {/* Coffee/Liquid in Cup */}
            <ellipse cx="307.5" cy="345" rx="25" ry="10" fill="#1a1a1a"/>
            <ellipse cx="307.5" cy="340" rx="25" ry="8" fill="#333333"/>
            
            {/* Shadow/Depth */}
            <ellipse cx="160" cy="375" rx="120" ry="25" fill="rgba(0,0,0,0.1)"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
