import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function DashboardLayout() {

    return (

        <div className="layout">

            <Sidebar />

            <main className="content">

                <Navbar />

                <section className="page">

                    <Outlet />

                </section>

            </main>

        </div>

    );

}