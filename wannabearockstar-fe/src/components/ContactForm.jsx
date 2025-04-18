import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // success / error

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, message };

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="contact_form container my-5">
      <h3 className="text-center mb-4">Contact Us</h3>
      {status === "success" && (
        <div className="alert alert-success text-center">Message sent!</div>
      )}
      {status === "error" && (
        <div className="alert alert-danger text-center">Something went wrong.</div>
      )}

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-12 mt-2">
  <textarea
    className="form-control"
    rows="4"
    placeholder="Your Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  ></textarea>
</div>
        <div className="col-12 text-center mt-3">
          <button type="submit" className="boxed-btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
