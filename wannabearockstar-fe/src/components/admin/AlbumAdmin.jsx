import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8080/api/albums";

function AlbumAdmin() {
  const [albums, setAlbums] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    coverUrl: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchAlbums = async () => {
    const res = await axios.get(API_BASE);
    setAlbums(res.data);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`${API_BASE}/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post(API_BASE, formData);
    }
    setFormData({ title: "", releaseYear: "", coverUrl: "", description: "" });
    fetchAlbums();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
    fetchAlbums();
  };

  const handleEdit = (album) => {
    setFormData(album);
    setEditingId(album.id);
  }

  return (
    <div className="container mt-5">
      <h2>Albums Admin</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="releaseYear"
          placeholder="Release Year"
          value={formData.releaseYear}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="coverUrl"
          placeholder="Cover URL"
          value={formData.coverUrl}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          {editingId ? "Update" : "Add"} Album
        </button>
        {editingId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setEditingId(null);
              setFormData({
                title: "",
                releaseYear: "",
                coverUrl: "",
                description: "",
              });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Cover</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.title}</td>
              <td>{album.releaseYear}</td>
              <td>
              <img src={process.env.PUBLIC_URL + '/' + album.coverUrl} alt={album.title} height={50} />
              </td>
              <td>{album.description}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(album)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(album.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlbumAdmin;
