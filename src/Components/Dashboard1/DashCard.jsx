import React from 'react';
import style from './card.module.css';

const Card = ({ title, value, icon }) => {
  return (
    <div className={style.card}>
      <div className={style.cardicon}>{icon}</div>
      <div className={style.cardinfo}>
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;
