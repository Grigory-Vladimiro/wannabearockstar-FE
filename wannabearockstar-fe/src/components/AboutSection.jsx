import React from "react";

const AboutSection = () => {
  return (
    <section className="about_area section_padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_text">
              <h3>About the Band</h3>
              <p>
                We are <strong>Wanna Be a Rockstar</strong> — a passionate rock band blending
                classic riffs with modern energy. Since our formation, we've aimed to keep
                real rock alive, one track at a time. From garage jams to festival stages,
                our journey is just beginning.
              </p>
              <p>
                Fueled by guitars, sweat, and pure love for music, we invite you to be part of
                our story — and crank the volume all the way up 🔥
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_image">
              <img
                src="img/about/about.jpg"
                alt="Band photo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
