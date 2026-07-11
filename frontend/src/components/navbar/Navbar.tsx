import {
    Bell,
    Search,
    UserCircle,
} from "lucide-react";

export default function Navbar() {

    return (

        <header className="navbar">

            <div className="search">

                <Search size={18} />

                <input
                    placeholder="Search threats, IOC, incidents..."
                />

            </div>

            <div className="actions">

                <Bell />

                <UserCircle size={34} />

            </div>

        </header>

    );

}