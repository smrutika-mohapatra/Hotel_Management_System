import React, { useState } from 'react';
import styles from './test.module.css';
import Nav from './Nav';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: 'Single',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Booking confirmed!');
  };

  return (
   <div>
    <Nav/>
    <div className={styles.BookContainer}>   
     <div className={styles.container}>
      <div className={styles.imageContainer}>
        <h1>UTSOVA HOTEL</h1>
        <img src="https://intelity.com/wp-content/uploads/LHW-Deal-Announcement-Digital-Assets-210119-Header-Background-1024x768.jpg" alt="Hotel Room" />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Book Your Room</h2>
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.inputRow}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div>
              <label>Check-in Date</label>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Check-out Date</label>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label>Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>

          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />

          <button type="submit" className={styles.submitButton}>
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
   </div>
   </div>
  );
};

export default BookingForm;
