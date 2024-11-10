import { Card, CardContent, Grid } from "@mui/material";
import PdSidebar from "../components/pd-dashboard/PdSidebar";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { energyData, carbonData, pieData } from "@/data/analytics-data";

const AnalyticsDash = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <PdSidebar />
      <div className="flex-1 p-4 overflow-y-auto">
        <Grid container spacing={2}>
          {/* Top Cards */}
          <Grid item xs={6} sm={3} md={3}>
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
              <CardContent className="p-3">
                <h3 className="text-sm font-medium opacity-90">
                  System Efficiency
                </h3>
                <p className="text-3xl font-bold mt-1">70%</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
              <CardContent className="p-3">
                <h3 className="text-sm font-medium opacity-90">
                  Renewable Energy
                </h3>
                <p className="text-3xl font-bold mt-1">70%</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
              <CardContent className="p-3">
                <h3 className="text-sm font-medium opacity-90">
                  Carbon Reduction
                </h3>
                <p className="text-3xl font-bold mt-1">40%</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
              <CardContent className="p-3">
                <h3 className="text-sm font-medium opacity-90">Summary</h3>
                <p className="text-xs mt-1 opacity-90">
                  Key metrics showing positive trends
                </p>
              </CardContent>
            </Card>
          </Grid>

          {/* Charts */}
          <Grid item xs={12} md={8}>
            <Card className="shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Energy Usage
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="energy" fill="#4CAF50" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Daily Energy Cost
                </h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#4CAF50"
                      label
                    >
                      <Cell fill="#4CAF50" />
                      <Cell fill="#FFA726" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center mt-4 text-lg font-medium text-gray-700">
                  Total: 336 THB
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className="shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Carbon Footprint CO2
                </h2>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={carbonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="co2" stroke="#4CAF50" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AnalyticsDash;