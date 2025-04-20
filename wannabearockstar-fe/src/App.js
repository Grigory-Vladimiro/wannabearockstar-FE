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
import NewsSection from "./components/NewsSection";

// admiin part
import AdminLayout from "./components/admin/AdminLayout";
import AlbumAdmin from "./components/admin/AlbumAdmin";
import ConcertAdmin from "./components/admin/ConcertAdmin";
import NewsAdmin from "./components/admin/NewsAdmin";

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
              <NewsSection />
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
          <Route path="news" element={<NewsAdmin />} />
          {/* to add dashboard */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;