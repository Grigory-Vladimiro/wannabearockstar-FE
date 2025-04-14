import React, { useEffect, useState } from "react";

const UpcomingShowsSection = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/concerts")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error("Failed to fetch concerts", err));
  }, []);

  return (
    <section className="shows_area section_padding" id="shows">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h3>Upcoming Shows</h3>
        </div>
        <div className="row justify-content-center">
          {shows.map((show, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="single_show text-center p-4 border mb-4">
                <h5>{show.city}</h5>
                <p>{show.venue}</p>
                <p>
                  <strong>
                    {new Date(show.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </strong>
                </p>
                <a href="#" className="boxed-btn">More Info</a>
              </div>
            </div>
          ))}
          {shows.length === 0 && (
            <div className="col-12 text-center text-muted">
              <p>Loading shows...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingShowsSection;