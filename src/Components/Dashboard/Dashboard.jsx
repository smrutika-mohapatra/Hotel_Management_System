import React from 'react';
import { Grid, Paper, Typography, Box, CircularProgress, Button } from '@mui/material';
import CustomPieChart from './CustomePaichart'; // Assume this is your PieChart component

// Sample data
const summaryData = [
  { title: 'Total Customers', value: '1,02,890', change: '+40%', color: 'success.main' },
  { title: 'Total Revenue', value: '$56,562', change: '+25%', color: 'success.main' },
  { title: 'Conversion Ratio', value: '12.08%', change: '-12%', color: 'error.main' },
  { title: 'Total Deals', value: '2,543', change: '+19%', color: 'success.main' }
];

const topDealsData = [
  { name: 'Michael Jordan', amount: '$2,893' },
  { name: 'Emigo Kiaren', amount: '$4,289' },
  { name: 'Randy Origoan', amount: '$6,347' },
  { name: 'George Pieterson', amount: '$3,894' }
];



const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Welcome Banner */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Welcome back, Json Taylor!</Typography>
            <Typography>Track your sales activity, leads, and deals here.</Typography>
          </Paper>
        </Grid>

        {/* Summary Cards - Generated dynamically */}
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="h4">{item.value}</Typography>
              <Typography color={item.color}>{item.change} this month</Typography>
            </Paper>
          </Grid>
        ))}

        {/* Circular Progress for Targets */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Your target is incomplete</Typography>
            <CircularProgress variant="determinate" value={48} />
            <Typography>You have completed 48% of your target</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Check Status</Button>
          </Paper>
        </Grid>

        {/* Pie Chart for Lead Sources */}
        

        {/* Top Deals - Generated dynamically */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Top Deals</Typography>
            <ul>
              {topDealsData.map((deal, index) => (
                <li key={index}>
                  {deal.name} - {deal.amount}
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;












// import React, { useState } from 'react';
// import style from './dashboard.module.css';

// function App() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [currentPage, setCurrentPage] = useState('Dashboard');

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className={style.container}>
//       <div className={style.sidebar}>
//         <div className={style.logo}>
//           <img src="ynex-logo.png" alt="Ynex Logo" />
//         </div>
//         <button className={style.menutoggle} onClick={toggleMenu}>
//           <span className={style.menuicon}></span>
//         </button>
//         <ul className={`nav ${showMenu ? 'show' : ''}`}>
//           <li className={currentPage === 'Dashboard' ? 'active' : ''} onClick={() => handlePageChange('Dashboard')}>
//             <a href="#">
//               <i className="fa fa-tachometer"></i>
//               <span>Dashboard</span>
//             </a>
//           </li>
//           <li className={currentPage === 'CRM' ? 'active' : ''} onClick={() => handlePageChange('CRM')}>
//             <a href="#">
//               <i className="fa fa-handshake-o"></i>
//               <span>CRM</span>
//             </a>
//           </li>
//           <li className={currentPage === 'Ecommerce' ? 'active' : ''} onClick={() => handlePageChange('Ecommerce')}>
//             <a href="#">
//               <i className="fa fa-shopping-cart"></i>
//               <span>Ecommerce</span>
//             </a>
//           </li>
//           {/* Add more menu items as needed */}
//         </ul>
//       </div>
//       <div className={style.maincontent}>
//         <header>
//           <div className={style.userinfo}>
//             <img src="user-profile.png" alt="User Profile" />
//             <span>Welcome back, Json Taylor!</span>
//           </div>
//           <div className={style.controls}>
//             <button className={style.filterbtn}>
//               <i className="fa fa-filter"></i>
//               Filters
//             </button>
//             <button className={style.exportbtn}>
//               <i className="fa fa-download"></i>
//               Export
//             </button>
//           </div>
//         </header>
//         <main>
//           <div className={style.dashboardsection}>
//             <h2>{currentPage}</h2>
//             {/* Add dashboard content here, based on the currentPage state */}
//             {currentPage === 'Dashboard' && (
//               <div className={style.row}>
//                 <div className={style.card}>
//                   <div className={style.cardheader}>
//                     <i className="fa fa-users"></i>
//                     <h3>Total Customers</h3>
//                   </div>
//                   <div className={style.cardbody}>
//                     <p className={style.value}>1,02,890</p>
//                     <div className={style.chartcontainer}>
//                       {/* Add chart here */}
//                       {/* Example using Chart.js */}
//                       <canvas id="chart-1" width="200" height="80"></canvas>
//                     </div>
//                     <p className={style.growth}>+40% this month</p>
//                     <button className={style.viewallbtn}>View All <i className="fa fa-angle-right"></i></button>
//                   </div>
//                 </div>
//                 <div className={style.card}>
//                   <div className={style.cardheader}>
//                     <i className="fa fa-money"></i>
//                     <h3>Total Revenue</h3>
//                   </div>
//                   <div className={style.cardbody}>
//                     <p className={style.value}>$56,562</p>
//                     <div className={style.chartcontainer}>
//                       {/* Add chart here */}
//                       {/* Example using Chart.js */}
//                       <canvas id="chart-2" width="200" height="80"></canvas>
//                     </div>
//                     <p className={style.growth}>+25% this month</p>
//                     <button className={style.viewallbtn}>View All <i className="fa fa-angle-right"></i></button>
//                   </div>
//                 </div>
//                 <div className={style.card}>
//                   <div className={style.cardheader}>
//                     <i className="fa fa-users"></i>
//                     <h3>Leads By Source</h3>
//                   </div>
//                   <div className={style.cardbody}>
//                     {/* Add chart here */}
//                     {/* Example using Chart.js */}
//                     <canvas id="chart-3" width="200" height="200"></canvas>
//                     <div className={style.legend}>
//                       <span className="legenditem mobile">Mobile: 1,624</span>
//                       <span className="legenditem desktop">Desktop: 1,267</span>
//                       <span className="legenditem laptop">Laptop: 1,153</span>
//                       <span className="legenditem tablet">Tablet: 679</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {/* Add content for other pages as needed */}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;