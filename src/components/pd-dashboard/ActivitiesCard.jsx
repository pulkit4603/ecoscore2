// import { Card, CardContent, CardTitle } from "@/components/ui/card";

// export default function AppliancesCard() {
//   return (
//     <div className="w-full h-[35%] border-none bg-red-100 p-2">
//       <Card className="border-none">
//         <CardTitle className="flex">Activities</CardTitle>
//         <div></div>
//       </Card>
//     </div>
//   );
// }

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tv, Coffee, Laptop, Microwave, Fan, ShowerHead } from "lucide-react";

export default function ActivitiesCard() {
  const activities = [
    {
      name: "Watching TV",
      icon: <Tv className="w-6 h-6 text-gray-600" />,
      hours: 2.5,
      appliances: ["Television", "Sound System"],
    },
    {
      name: "Working",
      icon: <Laptop className="w-6 h-6 text-gray-600" />,
      hours: 8,
      appliances: ["Laptop", "Desk Lamp", "Fan"],
    },
    {
      name: "Cooking",
      icon: <Microwave className="w-6 h-6 text-gray-600" />,
      hours: 1.5,
      appliances: ["Microwave", "Electric Stove", "Hood"],
    },
    {
      name: "Bathing",
      icon: <ShowerHead className="w-6 h-6 text-gray-600" />,
      hours: 0.5,
      appliances: ["Geyser"],
    },
  ];

  return (
    <div className="w-full h-[35%] bg-inherit p-2">
      <Card className="">
        <CardTitle className="flex p-4">Activities</CardTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white bg-gradient-to-b from-green-100 to-green-200 p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                {activity.icon}
                <h3 className="font-semibold">{activity.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{activity.hours} hours</p>
              <div className="mt-2">
                <p className="text-xs text-gray-500">Appliances:</p>
                <p className="text-xs">{activity.appliances.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
