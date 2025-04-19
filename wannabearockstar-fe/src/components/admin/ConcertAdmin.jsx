import React, { useEffect, useState } from "react";
import axios from "axios";

const ConcertAdmin = () => {
  const [concerts, setConcerts] = useState([]);
  const [newConcert, setNewConcert] = useState({
    venue: "",
    date: "",
    city: "",
  });
  const [editingConcert, setEditingConcert] = useState(null);

  useEffect(() => {
    fetchConcerts();
  }, []);

  const fetchConcerts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/concerts");
      setConcerts(response.data);
    } catch (error) {
      console.error("Error fetching concerts:", error);
    }
  };

  const handleChange = (e) => {
    setNewConcert({ ...newConcert, [e.target.name]: e.target.value });
  };

  const handleAddConcert = async () => {
    try {
      await axios.post("http://localhost:8080/api/concerts", newConcert);
      setNewConcert({ venue: "", date: "", city: "" });
      fetchConcerts();
    } catch (error) {
      console.error("Error adding concert:", error);
    }
  };

  const handleDeleteConcert = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/concerts/${id}`);
      fetchConcerts();
    } catch (error) {
      console.error("Error deleting concert:", error);
    }
  };

  const handleEditConcert = (concert) => {
    setEditingConcert(concert);
  };

  const handleUpdateConcert = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/concerts/${editingConcert.id}`,
        editingConcert
      );
      setEditingConcert(null);
      fetchConcerts();
    } catch (error) {
      console.error("Error updating concert:", error);
    }
  };

  const handleEditChange = (e) => {
    setEditingConcert({
      ...editingConcert,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Concerts Admin</h2>

      <h4>Add New Concert</h4>
      <input
        type="text"
        name="venue"
        placeholder="Venue"
        value={newConcert.venue}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={newConcert.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={newConcert.city}
        onChange={handleChange}
      />
      <button onClick={handleAddConcert}>Add</button>

      <h4>Existing Concerts</h4>
      <table>
        <thead>
          <tr>
            <th>Venue</th>
            <th>Date</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {concerts.map((concert) =>
            editingConcert && editingConcert.id === concert.id ? (
              <tr key={concert.id}>
                <td>
                  <input
                    name="venue"
                    value={editingConcert.venue}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <input
                    name="date"
                    type="date"
                    value={editingConcert.date}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <input
                    name="city"
                    value={editingConcert.city}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <button onClick={handleUpdateConcert}>Save</button>
                  <button onClick={() => setEditingConcert(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={concert.id}>
                <td>{concert.venue}</td>
                <td>{concert.date}</td>
                <td>{concert.city}</td>
                <td>
                  <button onClick={() => handleEditConcert(concert)}>Edit</button>
                  <button onClick={() => handleDeleteConcert(concert.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConcertAdmin;
