// src/Room.js
import React from 'react';
import style from './room.module.css';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
  return (
    <div>
      
      <div className={style.room}>
      <img src={room.image} alt={room.name} className={style.roomImage} />
      <h2 className={style.roomName}>{room.name}</h2>
      <p className={style.roomDescription}>{room.description}</p>
      <p className={style.roomPrice}>Price: ${room.price}/night</p>
      <button><Link to={"/book"} style={{ "textDecoration": "none", "color": "Black" }}>BOOK NOW</Link></button>

    </div>
    </div>
  );
};

export default Room;
