import {
    LayoutDashboard,
    Shield,
    FolderKanban,
    Server,
    Users,
    AlertTriangle,
    Network,
    Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Threats",
        path: "/threats",
        icon: Shield,
    },
    {
        name: "Incidents",
        path: "/incidents",
        icon: AlertTriangle,
    },
    {
        name: "Cases",
        path: "/cases",
        icon: FolderKanban,
    },
    {
        name: "Assets",
        path: "/assets",
        icon: Server,
    },
    {
        name: "IOC",
        path: "/ioc",
        icon: Network,
    },
    {
        name: "Users",
        path: "/users",
        icon: Users,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo">

                🛡 Enterprise AI SOC

            </div>

            <nav>

                {menus.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? "menu active" : "menu"
                            }
                        >

                            <Icon size={20} />

                            <span>{item.name}</span>

                        </NavLink>
                    );
                })}
            </nav>

        </aside>
    );
}