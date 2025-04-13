import React from "react";

const albums = [
  {
    title: "Rockin' the World",
    year: 2020,
    cover: "img/albums/album1.jpg"
  },
  {
    title: "Electric Storm",
    year: 2021,
    cover: "img/albums/album2.jpg"
  },
  {
    title: "Ballads & Fury",
    year: 2023,
    cover: "img/albums/album3.jpg"
  }
];

const AlbumsSection = () => {
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
                  src={album.cover}
                  alt={album.title}
                  className="img-fluid"
                />
                <h4 className="mt-3">{album.title}</h4>
                <p>{album.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumsSection;
