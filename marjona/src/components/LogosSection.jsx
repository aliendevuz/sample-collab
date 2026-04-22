import React from 'react';

function LogosSection() {
  const logos = [
    { id: 1, text: 'Logoipsum' },
    { id: 2, text: 'Logoipsum' },
    { id: 3, text: 'Logoipsum' },
    { id: 4, text: 'logoipsum' },
    { id: 5, text: 'Logo' }
  ];

  return (
    <section className="logos-section">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-item">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="#666" strokeWidth="2"/>
            <text x="24" y="28" textAnchor="middle" fill="#999" fontSize="12">
              Logo
            </text>
          </svg>
          <span>{logo.text}</span>
        </div>
      ))}
    </section>
  );
}

export default LogosSection;
