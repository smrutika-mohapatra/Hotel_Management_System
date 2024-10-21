import React from 'react';
import style from './recentSales.module.css'

const RecentSales = () => {
  const sales = [
    { ARRIVAL: '07 sept 2024', DEPARTURE: '15 sept 2024', CUSTOMER: 'xyz', BOOK: 'CONFERENCE HALL' },
    { ARRIVAL: '07 sept 2024', DEPARTURE: '15 sept 2024', CUSTOMER: 'xyz', BOOK: 'SUITE' },
    { ARRIVAL: '07 sept 2024', DEPARTURE: '15 sept 2024', CUSTOMER: 'xyz', BOOK: 'DELUX ROOM' },
    { ARRIVAL: '07 sept 2024', DEPARTURE: '15 sept 2024', CUSTOMER: 'xyz', BOOK: 'GARDEN AREA' },
    // Add more sales data as needed
  ];

  return (
    <div className={style.recentsales}>
      <h3>Recent Sales</h3>
      <table>
        <thead>
          <tr>
            <th>ARRIVAL</th> 
            <th>DEPARTURE</th>
            <th>CUSTOMER</th>
            <th>BOOK FOR</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.ARRIVAL}</td>
              <td>{sale.DEPARTURE}</td>
              <td>{sale.CUSTOMER}</td>
              <td>{sale.BOOK}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentSales;
