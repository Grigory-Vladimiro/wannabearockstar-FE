import React, { useEffect, useState } from "react";

const AlbumsSection = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.error("Failed to load albums", err));
  }, []);

  return (
    <section className="albums_area section_padding">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h3>Our Albums</h3>
        </div>
        <div className="row">
          {albums.map((album, index) => (
            <div className="col-md-4" key={index}>
              <div className="single_album text-center mb-4">
                <img
                  src={album.coverUrl || "https://via.placeholder.com/300x300"}
                  alt={album.title}
                  className="img-fluid"
                />
                <h4 className="mt-3">{album.title}</h4>
                <p>{album.releaseYear}</p>
              </div>
            </div>
          ))}
          {albums.length === 0 && (
            <div className="col-12 text-center text-muted">
              <p>Loading albums...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AlbumsSection;