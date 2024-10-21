import React from 'react';
import style from './topSelling.module.css'
import { Grid, Paper, Typography } from '@mui/material';
import CustomPieChart from '../Dashboard/CustomePaichart';

const TopSellingProducts = () => {
  // const products = [
  //   { name: '', price: '' },
  //   { name: '', price: 'INR 11' },
  //   { name: '', price: 'INR' },
  //   { name: '', price: 'INR 949' },
  //   // Add more products as needed
  // ];
const pieChartData = [
  { name: 'Conference Hall', value: 51549 },
  { name: 'Delux Room', value: 4967 },
  { name: 'Garden Area', value:41549 },
  { name: 'Suite', value: 979 }
];
  return (
    <div className={style.topsellingproducts}>
       {/* <ul>
        {products.map((product, index) => (
          <li key={index}>
            <span>{product.name}</span>
            <span>{product.price}</span>
          </li>
        ))}
      </ul> */}
      <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }} style={{borderRadius:"10px"}}>
            <Typography variant="h6"  style={{color:"rgb(5, 5, 99)",marginBottom:"20px",fontSize:"2rem",fontWeight:"bold",textShadow:"0px 2px 2px rgb(55, 157, 234)"}}>Leads by Source</Typography>
            <CustomPieChart data={pieChartData} />
          </Paper>
        </Grid>
    </div>
  );
};

export default TopSellingProducts;
