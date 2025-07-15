import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact fade-in" id="contact">
      <h2 className="slide-in-left">Get in Touch</h2>
      <form className="contact-form slide-in-right">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      <div className="social-links slide-in-left">
        <a href="https://github.com/Johnkamau106" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/john-kamau-1a438a315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="johnkamau106@gmail.com">Email</a>
      </div>
      <footer className="fade-in">
        <p>&copy; 2024 John Kamau. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;