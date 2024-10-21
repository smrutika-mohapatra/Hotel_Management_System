import React from 'react';
import style from "../../Pages/dashboard.module.css"
// import style from './card.module.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'white',
      borderColor: 'green',
      borderWidth: 1,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const Chart = () => {
  return (
    <div className={style.chartcontainer}>
      <Line data={data} options={options} style={{color:"white"}}/>
    </div>
  );
};

export default Chart;
