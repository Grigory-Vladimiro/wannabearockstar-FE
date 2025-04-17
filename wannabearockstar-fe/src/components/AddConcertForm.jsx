import React, { useState } from "react";

const AddConcertForm = ({ onAdd }) => {
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newConcert = { city, venue, date };

    try {
      const response = await fetch("http://localhost:8080/api/concerts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConcert),
      });

      if (response.ok) {
        const savedConcert = await response.json();
        if (onAdd) onAdd(savedConcert);
        setCity("");
        setVenue("");
        setDate("");
      } else {
        console.error("Error saving concert:", response.statusText);
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <div className="add_concert_form container my-5">
      <h3 className="text-center mb-4">Add New Concert</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="col-12 text-center mt-3">
          <button type="submit" className="boxed-btn">
            Add Concert
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddConcertForm;
