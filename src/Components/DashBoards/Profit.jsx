import React from 'react';
import { Box, Grid, Paper, Typography, Divider } from '@mui/material';

// import { Bar } from 'react-chartjs-2';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';


const data = [
    { name: 'Jan', Sales: 400, Revenue: 240, Profit: 240 },
    { name: 'Feb', Sales: 300, Revenue: 139, Profit: 221 },
    { name: 'Mar', Sales: 500, Revenue: 980, Profit: 229 },
    { name: 'Apr', Sales: 478, Revenue: 390, Profit: 200 },
    { name: 'May', Sales: 589, Revenue: 480, Profit: 218 },
    { name: 'Jun', Sales: 439, Revenue: 380, Profit: 250 },
    { name: 'Jul', Sales: 349, Revenue: 430, Profit: 210 },
];

const profitData = [
    { name: 'S', profit: 30 },
    { name: 'M', profit: 20 },
    { name: 'T', profit: 60 },
    { name: 'W', profit: 90 },
    { name: 'T', profit: 50 },
    { name: 'F', profit: 70 },
    { name: 'S', profit: 80 },
];
const Profit = () => {
    return (
        <Box sx={{ flexGrow: 2, p: 1 }}>
            <Grid container spacing={1}>
                {/* Left Section */}
                <Grid item xs={1} md={6} style={{display:"flex",marginRight:"-10%"}}>

          
                    <Paper sx={{ p: 2, mt: 1 }}>
                        <Typography variant="h6"  style={{color:"rgb(5, 5, 99)",marginBottom:"20px",fontSize:"2rem",fontWeight:"bold",textShadow:"0px 2px 2px rgb(55, 157, 234)"}}>Top Deals</Typography>
                        <ul>
                            <li>Randy Origoan - $6,347</li>
                            <li>George Pieterson - $3,894</li>
                            <li>Kiara Advain - $2,679</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid container spacing={3}>
                    {/* Profit Earned Card */}
                    <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, mt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography 
                        variant="h6" 
                        style={{
                            color: "rgb(5, 5, 99)", 
                            marginBottom: "20px", 
                            fontSize: "1.5rem", 
                            fontWeight: "bold", 
                            textShadow: "0px 2px 2px rgb(55, 157, 234)"
                        }}
                    >
                        Profit Earned
                    </Typography>
                    <Typography variant="body2" sx={{ cursor: 'pointer', color: 'grey' }}>
                        View All
                    </Typography>
                </Box>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={profitData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="profit" fill="#8884d8" barSize={20} radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>

                   
                </Grid>

                {/* Middle Section - Line Chart */}
                
            </Grid>
        </Box>
    );
};

export default Profit;
