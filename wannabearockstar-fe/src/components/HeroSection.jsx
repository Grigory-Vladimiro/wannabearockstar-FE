import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="slider_area">
      <div
        className="single_slider slider_bg_1 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#111", // Fallback color
          minHeight: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-6">
              <div className="slider_text">
                <h3>
                  Musician <br />
                  is a person who writes <br />
                  and performs music
                </h3>
                <a href="#" className="boxed-btn-white">
                  Explore Music
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
