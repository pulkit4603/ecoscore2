import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award } from "lucide-react";
import PdSidebar from "@/components/pd-dashboard/PdSidebar";
import leaderboardData from "@/data/leaderboardData.json";

const Leaderboard = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-6 w-6 text-green-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <PdSidebar />
      <div className="flex-1 p-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Leaderboard
            </h1>
            <div className="grid w-full max-w-md grid-cols-1 gap-4">
              <Button
                variant="solid"
                className="bg-green-600 text-white"
              >
                View All
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaderboardData.map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      {getIcon(user.icon)}
                      <Badge variant="outline" className="bg-amber-100 dark:bg-amber-900">
                        <Award className="h-4 w-4 mr-1" />
                        Rank #{user.rank}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4">{user.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Points
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {user.points}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;