import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// public part
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AlbumsSection from "./components/AlbumsSection";
import AboutSection from "./components/AboutSection";
import UpcomingShowsSection from "./components/UpcomingShowsSection";
import ContactSection from "./components/ContactSection";
import AddConcertForm from "./components/AddConcertForm";
import AddAlbumForm from "./components/AddAlbumForm";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// admiin part
import AdminLayout from "./components/admin/AdminLayout";
import AlbumAdmin from "./components/admin/AlbumAdmin";
import ConcertAdmin from "./components/admin/ConcertAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <AlbumsSection />
              <AboutSection />
              <UpcomingShowsSection />
              <ContactSection />
              <AddConcertForm />
              <AddAlbumForm />
              <ContactForm />
              <Footer />
            </>
          }
        />

        {/* admin layout */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="albums" element={<AlbumAdmin />} />
          <Route path="concerts" element={<ConcertAdmin />} />
          {/* to add dashboard */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;