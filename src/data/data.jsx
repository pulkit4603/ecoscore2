import { House, MonitorSmartphone, Dumbbell } from "lucide-react";
import { IconArrowLeft, IconSettings, IconUserBolt } from "@tabler/icons-react";

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
  {
    label: "Profile",
    href: "#",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export const userName = "Abhi9";
