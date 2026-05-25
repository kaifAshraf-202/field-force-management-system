import {
  LayoutDashboard,
  ClipboardList,
  MapPinned,
  FileText,
  Users,
  ScrollText,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <ClipboardList size={20} />,
    },
    {
      name: "Visits",
      path: "/visits",
      icon: <MapPinned size={20} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText size={20} />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <Users size={20} />,
    },
    {
      name: "Logs",
      path: "/logs",
      icon: <ScrollText size={20} />,
    },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-5">

      <h1 className="text-2xl font-bold mb-10 text-blue-400">
        FFMS
      </h1>

      <div className="flex flex-col gap-2">

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-500"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default Sidebar;