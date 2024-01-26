import React, { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="cont">
      <form
        className="form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <h2>CONTACT ME</h2>
        <h4>if you want to post</h4>

        <input
          type="hidden"
          name="access_key"
          value="c2d3d00a-ddc3-4a53-860a-a858f93a35e8"
        ></input>
        <p type="Name:">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Write your name here.."
            value={formData.name}
            onChange={handleChange}
          />
        </p>
        <p type="Email:">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Let me know how to contact you back.."
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        <p type="Message:">
          <textarea
            className="textarea"
            name="message"
            placeholder="What would you like to tell me.."
            value={formData.message}
            onChange={handleChange}
          />
        </p>
        <button className="button" type="submit">
          Send Message
        </button>
        <div className="contactInfo">
          <span className="fa fa-phone">91 4299 2036</span>
          <span className="fa fa-envelope-o">vinodkumarmurmu62@gmail.com</span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
