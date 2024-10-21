import React from 'react';
import Sidebar from './SideBar';
import TopBar from './TopBar';
import SummaryCards from './SummeryCard';
import RecentSales from './RecentSales';
import TopSellingProducts from './TopsellingProduct';
import Profit from './Profit'
import Revenue from './Revenue'
import style from './dashboard.module.css';

function App() {
  return (
    <div className={style.app}>
     <Sidebar/>
           <div className={style.maincontent}>
        <TopBar />
        <SummaryCards />
        <div className={style.content}>
          <RecentSales />
          <TopSellingProducts />
        </div>
        <div className={style.content}>
        <Profit/>
        <Revenue/>
        </div>
      </div>
    </div>
  );
}

export default App;
