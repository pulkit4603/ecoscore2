import { House, MonitorSmartphone, Dumbbell } from "lucide-react";

export const sidebarLinks = [
  {
    label: "Dashboard",
    href: "#",
    icon: (
      <House className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Appliances",
    href: "#",
    icon: (
      <MonitorSmartphone className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Activities",
    href: "#",
    icon: (
      <Dumbbell className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export const userName = "Abhi9";
