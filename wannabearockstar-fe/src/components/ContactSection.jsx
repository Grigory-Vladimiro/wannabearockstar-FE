import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to send data to backend
    alert("Message sent (mock)!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact_area section_padding">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h3>Contact Us</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="contact_form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="boxed-btn">
                  Send Message
                </button>
              </div>
            </form>

            <div className="contact_social text-center mt-4">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <p className="mt-3">Or email us: <a href="mailto:rock@band.com">rock@band.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
