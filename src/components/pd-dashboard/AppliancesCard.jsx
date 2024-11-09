import { Tv, Droplet, Wind, Fan } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function AppliancesCard() {
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
      name: "Air Conditioner",
      icon: <Wind className="w-6 h-6 text-gray-600" />,
      hours: 6,
      appliances: ["Split AC", "Window AC"],
      tip: "Set to 24°C, clean filters regularly",
      consumption: "1500-2000 watts",
    },
    // {
    //   name: "Fan",
    //   icon: <Fan className="w-6 h-6 text-gray-600" />,
    //   hours: 8,
    //   appliances: ["Ceiling Fan", "Table Fan"],
    //   tip: "Use lower speeds when possible",
    //   consumption: "60-75 watts",
    // },
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
    </div>
  );
}
