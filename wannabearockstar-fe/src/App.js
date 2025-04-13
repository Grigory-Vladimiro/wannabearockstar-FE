import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AlbumsSection from './components/AlbumsSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AlbumsSection />
      <AboutSection />
      {/* Other sections */}
    </div>
  );
}

export default App;
