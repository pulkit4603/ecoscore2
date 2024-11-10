import React, { useState, useEffect } from "react";
import { Tv, Droplet, Wind } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Alert, AlertDescription } from "@/components/ui/alert";
import applianceData from "@/data/appliance.json";

// Simulated API function
const fetchApplianceData = async (applianceId) => {
  try {
    const response = await fetch('/api/appliances/' + applianceId);
    const data = await response.json();
    return data;
  } catch (error) {
    // For demo, return dummy data
    const dummyData = applianceData;
    return dummyData[applianceId];
  }
};

const ApplianceDialog = ({ appliance, open, onClose }) => {
  const [timeSeriesData, setTimeSeriesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (appliance) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const applianceId = appliance.name.toLowerCase().replace(/\s+/g, '');
          const data = await fetchApplianceData(applianceId);
          setTimeSeriesData(data);
          setError(null);
        } catch (err) {
          setError('Failed to load appliance data');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [appliance]);

  if (!appliance) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {appliance.icon}
            <span>{appliance.name} Power Consumption</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {isLoading ? (
            <div className="h-[400px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeSeriesData?.timeSeriesData}>
                    <XAxis 
                      dataKey="timestamp"
                      label={{ value: 'Time of Day', position: 'bottom' }}
                    />
                    <YAxis 
                      label={{ value: 'Power (Watts)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="power" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Power Consumption"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Usage Analysis</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-600">Daily Usage:</p>
                      <p>{appliance.hours} hours/day</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Power Range:</p>
                      <p>{appliance.consumption}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Energy Saving Tip</h4>
                  <p className="text-blue-700">{appliance.tip}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function AppliancesCard() {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  const appliances = [
    {
      name: "Television",
      icon: <Tv className="w-6 h-6 text-gray-600" />,
      hours: 4,
      appliances: ["LED TV", "Smart TV Box"],
      tip: "Use eco mode, reduce brightness",
      consumption: "150-200 watts",
    },
    {
      name: "Geyser",
      icon: <Droplet className="w-6 h-6 text-gray-600" />,
      hours: 2,
      appliances: ["Electric Water Heater"],
      tip: "Use timer settings, insulate tanks",
      consumption: "2000-3000 watts",
    },
    {
      name: "AirConditioner",
      icon: <Wind className="w-6 h-6 text-gray-600" />,
      hours: 6,
      appliances: ["Split AC", "Window AC"],
      tip: "Set to 24°C, clean filters regularly",
      consumption: "1500-2000 watts",
    },
  ];

  return (
    <div className="w-full h-[35%] bg-inherit p-2">
      <Card className="">
        <CardTitle className="flex p-4">Appliances</CardTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {appliances.map((appliance, index) => (
            <div
              key={index}
              className="bg-white bg-gradient-to-r from-green-200 to-green-300 p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow"
              onClick={() => setSelectedAppliance(appliance)}
            >
              <div className="flex items-center gap-2 mb-2">
                {appliance.icon}
                <h3 className="font-semibold">{appliance.name}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {appliance.hours} hours/day
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {appliance.consumption}
              </p>
              <div className="mt-2">
                <p className="text-xs text-green-600">Eco Tip:</p>
                <p className="text-xs text-gray-600">{appliance.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <ApplianceDialog
        appliance={selectedAppliance}
        open={!!selectedAppliance}
        onClose={() => setSelectedAppliance(null)}
      />
    </div>
  );
}