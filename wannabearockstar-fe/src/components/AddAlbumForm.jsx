import React, { useState } from "react";

const AddAlbumForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAlbum = { title, releaseYear, coverUrl, description };

    try {
      const response = await fetch("http://localhost:8080/api/albums", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAlbum),
      });

      if (response.ok) {
        const saved = await response.json();
        if (onAdd) onAdd(saved);
        setTitle("");
        setReleaseYear("");
        setCoverUrl("");
        setDescription("");
      } else {
        console.error("Error saving album:", response.statusText);
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <div className="add_album_form container my-5">
      <h3 className="text-center mb-4">Add New Album</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Album Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Year"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Cover Image URL"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="col-12 text-center mt-3">
          <button type="submit" className="boxed-btn">
            Add Album
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAlbumForm;
