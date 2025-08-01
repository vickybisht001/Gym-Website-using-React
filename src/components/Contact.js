import React, { useState,useEffect } from "react";
const Contact = () => {

  useEffect(() => {
  document.title = 'Contact page of my Fitness - GYM'
  
  }, [])
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (!isValidEmail(formData.email)) {
      setStatusMessage("❌ Please enter a valid email address.");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("❌ An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='contact-header'>
      <div className='bg-section'>
        <div className="bg-text">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact-page">
        <div className='address-section'>
          <span>Contact Us</span>
          <h2>Get in Touch</h2>
          <div className='ct-text'>
            <i className='bx bx-location-plus'></i>
            <p className='mx-3'>Main Mohan Nagar, Ghaziabad</p>
          </div>
          <div className='ct-text'>
            <i className='bx bxs-phone'></i>
            <p className='mx-3'>+91 82879 17781</p>
          </div>
          <div className='ct-text'>
            <i className='bx bx-envelope'></i>
            <p className='mx-3'>GYMCenter@gmail.com</p>
          </div>
        </div>

        <div className='form-section'>
          <form onSubmit={handleSubmit} className="form">
            <div className="p-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="p-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-2">

              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="form-btn"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && (
              <div
                className="w-full text-center mt-4 text-sm text-danger"
                aria-live="polite"
              >
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className='map-section'>
        <div className="container">
          <iframe
            title="Gym Location Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224114.77392011767!2d77.2046848!3d28.635955199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724648933660!5m2!1sen!2sin"
            className='map'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
