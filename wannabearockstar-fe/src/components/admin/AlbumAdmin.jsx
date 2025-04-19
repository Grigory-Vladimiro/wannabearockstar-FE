import React, { useEffect, useState } from "react";
import axios from "axios";

const AlbumAdmin = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/albums");
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  return (
    <div className="admin-content">
      <h2>Albums Admin</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Cover</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>{album.releaseYear}</td>
              <td>
                <img
                  src={`/${album.coverUrl}`}
                  alt={album.title}
                  style={{ height: "50px" }}
                />
              </td>
              <td>{album.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumAdmin;
