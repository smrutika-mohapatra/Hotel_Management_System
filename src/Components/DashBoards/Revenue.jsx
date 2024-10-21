import React from 'react';
import { Box, Grid, Paper, Typography, Divider } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart } from 'recharts';
const data = [
    { name: 'Jan', Sales: 400, Revenue: 240, Profit: 240 },
    { name: 'Feb', Sales: 300, Revenue: 139, Profit: 221 },
    { name: 'Mar', Sales: 500, Revenue: 980, Profit: 229 },
    { name: 'Apr', Sales: 478, Revenue: 390, Profit: 200 },
    { name: 'May', Sales: 589, Revenue: 480, Profit: 218 },
    { name: 'Jun', Sales: 439, Revenue: 380, Profit: 250 },
    { name: 'Jul', Sales: 349, Revenue: 430, Profit: 210 },
];

const Profit = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
              

                {/* Middle Section - Line Chart */}
                <Grid item xs={12} md={100} style={{marginLeft:"-300px"}}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" style={{color:"rgb(5, 5, 99)",marginBottom:"20px",fontSize:"2rem",fontWeight:"bold",textShadow:"0px 2px 2px rgb(55, 157, 234)"}}>Revenue Analytics</Typography>
                        <ResponsiveContainer width="100%" height={340}>
                            <LineChart data={data}>
                                <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
                                <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="Profit" stroke="#ffc658" />
                                <CartesianGrid stroke="white" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                {/* Right Section - Deal Status */}
                
            </Grid>
        </Box>
    );
};

export default Profit;
