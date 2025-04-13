import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AlbumsSection from './components/AlbumsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import UpcomingShowsSection from './components/UpcomingShowsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AlbumsSection />
      <AboutSection />
      <UpcomingShowsSection />
      <ContactSection />
      <Footer />
      {/* Other sections */}
    </div>
  );
}

export default App;
