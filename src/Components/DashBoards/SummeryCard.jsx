import React from 'react';
import style from './summeryCard.module.css';

const SummaryCards = () => {
  const data = [
    { title: 'Total Order', value: '40,876', icon: '🛒', status: 'up' },
    { title: 'Total Sales', value: '38,876', icon: '🛍️', status: 'up' },
    { title: 'Total Profit', value: '12,876', icon: '💵', status: 'up' },
    { title: 'Total Return', value: '11,086', icon: '🔙', status: 'down' },
  ];

  return (
    <div className={style.summarycards}>
      {data.map((item, index) => (
        <div className={style.card} key={index}>
          <h3>{item.title}</h3>
          <p>{item.value}</p>
          <span className={`${style.status} ${style[item.status]}`}>
            {item.icon}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
