// src/Rooms.js
import React from 'react';
import Room from './Room';
import style from './room.module.css';
import { Link } from 'react-router-dom';
import Nav from "../Nav"
import Footer from '../Footer';

const rooms = [
  {
    name: 'Deluxe Room',
    description: 'A luxurious room with a king-size bed, ocean view, and modern amenities.',
    price: 250,
    image: 'https://www.ahstatic.com/photos/9078_rokgb_00_p_1024x768.jpg', 
  },
  {
    name: 'Standard Room',
    description: 'A comfortable room with a queen-size bed and a garden view.',
    price: 150,
    image: 'https://thumbs.dreamstime.com/b/tranquil-bedroom-canopy-bed-sunlit-garden-view-serene-ambiance-ultimate-relaxation-bright-cozy-modern-minimalist-326570237.jpg', 
  },
  {
    name: 'Suite',
    description: 'An expansive suite with a separate living area and breathtaking city views.',
    price: 400,
    image: 'https://www.travelandleisure.com/thmb/uWwv2wR4LeMCGRUgvpz8MKAzuyk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wynn-las-vegas-encore-three-bed-duplex-LUXESUITE0122-6c1cafc69be04401a975bd7edb7a1e84.jpg', 
  },
];

const Rooms = () => {
  return (
    <div className={style.rooms}>
      <Nav/>
      <h1>Our Rooms</h1>
      <div className={style.roomsContainer}>
      
        {rooms.map((room, index) => (
          <Room key={index} room={room} />         
        ))}
          

      </div>
      <Footer/>
    </div>
  );
};

export default Rooms;
