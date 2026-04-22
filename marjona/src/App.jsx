import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LogosSection from './components/LogosSection';

function App() {
  return (
    <div className="body-container">
      <Header />
      <Hero />
      <LogosSection />
    </div>
  );
}

export default App;
