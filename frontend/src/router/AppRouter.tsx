import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Assets from "../pages/Assets/Assets";
import Threats from "../pages/Threats/Threats";
import Incidents from "../pages/Incidents/Incidents";
import Cases from "../pages/Cases/Cases";
import IOC from "../pages/IOC/IOC";
import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {

return (

<Routes>

<Route path="/login" element={<Login />} />

<Route element={<DashboardLayout />}>

<Route path="/" element={<Dashboard />} />

<Route path="/assets" element={<Assets />} />

<Route path="/threats" element={<Threats />} />

<Route path="/incidents" element={<Incidents />} />

<Route path="/cases" element={<Cases />} />

<Route path="/ioc" element={<IOC />} />

<Route path="/users" element={<Users />} />

<Route path="/settings" element={<Settings />} />

</Route>

<Route path="*" element={<NotFound />} />

</Routes>

);

}