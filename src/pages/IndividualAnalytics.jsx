import React from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';
import PdSidebar from '../components/pd-dashboard/PdSidebar';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend } from 'recharts';

const AnalyticsDash = () => {
    // Sample data for the charts
    const energyData = [
        { month: 'Jan', energy: 90, temp: 12 },
        { month: 'Feb', energy: 100, temp: 16 },
        { month: 'Mar', energy: 150, temp: 20 },
        { month: 'Apr', energy: 200, temp: 24 },
        { month: 'May', energy: 250, temp: 28 },
        { month: 'Jun', energy: 300, temp: 30 },
        { month: 'Jul', energy: 330, temp: 32 },
        { month: 'Aug', energy: 350, temp: 36 },
        { month: 'Sep', energy: 320, temp: 30 },
        { month: 'Oct', energy: 280, temp: 24 },
        { month: 'Nov', energy: 200, temp: 16 },
        { month: 'Dec', energy: 100, temp: 10 }
    ];

    const pieData = [
        { name: 'Main Power', value: 72 },
        { name: 'Green Energy', value: 28 }
    ];

    const carbonData = [
        { year: '2015', co2: 30 },
        { year: '2016', co2: 28 },
        { year: '2017', co2: 25 },
        { year: '2018', co2: 23 },
        { year: '2019', co2: 20 },
        { year: '2020', co2: 18 },
        { year: '2021', co2: 15 },
        { year: '2022', co2: 13 },
        { year: '2023', co2: 10 }
    ];

    return (
        <div className="flex">
            <PdSidebar />
            <div className="flex-1 p-5">
                <Typography variant="h4" gutterBottom>Dashboard</Typography>
                <Grid container spacing={3}>
                    {/* Top Cards */}
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Card className="bg-green text-white">
                            <CardContent>
                                <Typography variant="h6">Overall System Efficiency</Typography>
                                <Typography variant="h3">70%</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Card className="bg-green text-white">
                            <CardContent>
                                <Typography variant="h6">Renewable Energy Utilization</Typography>
                                <Typography variant="h3">70%</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Card className="bg-green text-white">
                            <CardContent>
                                <Typography variant="h6">Carbon Emission Reduction</Typography>
                                <Typography variant="h3">40%</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="bg-green text-white">
                            <CardContent>
                                <Typography variant="h6">Energy Cost Savings</Typography>
                                <Typography variant="h3">150 metric tons CO2/year</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className="bg-green text-white">
                            <CardContent>
                                <Typography variant="h6">Overall System Carbon Footprint</Typography>
                                <Typography variant="h3">150 metric tons CO2/year</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Energy Usage Chart */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h6">Energy Usage</Typography>
                        <BarChart width={600} height={300} data={energyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="energy" fill="#4CAF50" />
                            <Line type="monotone" dataKey="temp" stroke="#FFA726" />
                        </BarChart>
                    </Grid>

                    {/* Daily Energy Cost */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6">Daily Energy Cost</Typography>
                        <PieChart width={300} height={300}>
                            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#4CAF50" label>
                                <Cell fill="#4CAF50" />
                                <Cell fill="#FFA726" />
                            </Pie>
                        </PieChart>
                        <Typography align="center">Total: 336 THB</Typography>
                    </Grid>

                    {/* Carbon Footprint CO2 */}
                    <Grid item xs={12}>
                        <Typography variant="h6">Carbon Footprint CO2</Typography>
                        <LineChart width={800} height={250} data={carbonData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="co2" stroke="#4CAF50" />
                        </LineChart>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AnalyticsDash;