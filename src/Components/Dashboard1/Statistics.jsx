import React from 'react';
import Card from './DashCard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import style from "../../Pages/dashboard.module.css"
import style from './card.module.css';

const Statistics = () => {
  return (
    <div className={style.statistics}>
      <Card title="Total Users" value="1,234" icon={<PeopleIcon />} />
      <Card title="Orders" value="567" icon={<ShoppingCartIcon />} />
      <Card title="Revenue" value="$12,345"  />
    </div>
  );
};

export default Statistics;
