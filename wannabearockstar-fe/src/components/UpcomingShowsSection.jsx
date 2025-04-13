import React from "react";

const upcomingShows = [
  {
    date: "2025-05-10",
    city: "Madrid",
    venue: "Rock Arena"
  },
  {
    date: "2025-06-02",
    city: "Barcelona",
    venue: "Electric Stage"
  },
  {
    date: "2025-07-15",
    city: "Valencia",
    venue: "Sunset Club"
  }
];

const UpcomingShowsSection = () => {
  return (
    <section className="shows_area section_padding">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h3>Upcoming Shows</h3>
        </div>
        <div className="row justify-content-center">
          {upcomingShows.map((show, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="single_show text-center p-4 border mb-4">
                <h5>{show.city}</h5>
                <p>{show.venue}</p>
                <p><strong>{new Date(show.date).toLocaleDateString()}</strong></p>
                <a href="#" className="boxed-btn">More Info</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingShowsSection;
