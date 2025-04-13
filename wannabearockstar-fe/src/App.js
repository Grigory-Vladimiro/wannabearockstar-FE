import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AlbumsSection from './components/AlbumsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AlbumsSection />
      <AboutSection />
      <Footer />
      {/* Other sections */}
    </div>
  );
}

export default App;
