import React, { useState } from 'react';
import style from './contact.module.css';
import Nav from '../Nav';
import Footer from '../Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending data to an API or email
    console.log('Form Data Submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <div className={style.container}>
      <Nav />
      <div className={style.contactcontainer}>
        <h1 className={style.heading}>CONTACT US</h1>

        <div className={style.contactinfo}>
          <div className={style.addresssection}>
            <h2 className={style.subtitle}>Our Location</h2>
            <p className={style.text}>UTSOVA Hotel</p>
            <p className={style.text}>Bhubaneswar,Odisha</p>
            <p className={style.text}>+91 234 567 890</p>
            <p className={style.text}>contact@utsovahotel.com</p>
          </div>

          <div className={style.formsection}>
            <h2 className={style.subtitle}>Get in Touch</h2>
            <form onSubmit={handleSubmit} className={style.contactform}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={style.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={style.input}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className={style.input}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className={style.textarea}
              ></textarea>
              <button type="submit" className={style.button}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
