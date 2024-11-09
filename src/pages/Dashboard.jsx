"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { userName } from "@/data/data.jsx";
import PdSidebar from "@/components/pd-dashboard/PdSidebar";

export default function Dashboard() {
  console.log("Dashboard rendering");
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen"
      )}
    >
      <PdSidebar />
      <UserWelcome />
    </div>
  );
}

// Dummy dashboard component with content
const UserWelcome = () => {
  return (
    <div className="flex w-full">
      <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <Card className="bg-gradient-to-r p-6 from-green-500 to-green-700 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
          <CardTitle className="pb-6">Hello {userName}</CardTitle>
          <CardContent className="p-0">
            Welcome to EcoScore: Your Personal Energy Manager
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
