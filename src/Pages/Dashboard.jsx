import React from 'react';
import Statistics from '../Components/Dashboard/Statistics';
import Chart from '../Components/Dashboard/Chart';
import TaskList from '../Components/Dashboard/TaskList';
import style from './dashboard.module.css';
import NavBar from "../Components/Dashboard/NavBar"

const Dashboard = () => {
  return (
    <div className={style.dashboard}>
      <h1>DASHBOARD</h1>
      <NavBar/>
      <div className={style.dashboardcontent}>
        <Statistics />
        <Chart />
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
