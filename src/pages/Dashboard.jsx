"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { userName } from "@/data/data.jsx";
import PdSidebar from "@/components/pd-dashboard/PdSidebar";
import { Score } from "@/components/pd-dashboard/Score";
import { ScoreHistory } from "@/components/pd-dashboard/ScoreHistory";
import AppliancesCard from "@/components/pd-dashboard/AppliancesCard";

export default function Dashboard() {
  console.log("Dashboard rendering");
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-inherit dark:bg-neutral-800 w-full flex-1 mx-auto border-none border-0 overflow-hidden h-screen"
      )}
    >
      <PdSidebar />
      <div className="w-full bg-inherit border-none">
        <UserWelcome />
        <AppliancesCard />
      </div>
      <div className="h-screen border-none">
        <Score />
        <ScoreHistory />
      </div>
    </div>
  );
}

// Dummy dashboard component with content
const UserWelcome = () => {
  return (
    <div className="flex w-full">
      <div className="p-2 md:p-10 border-none bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
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
