import { BrowserRouter as Router, Routes as ReactRoutes, Route, useLocation, Navigate } from 'react-router-dom'
import { Sidebar } from "../components/layout/sidebar"
import { Header } from "../components/layout/header"
import DashboardPage from "../pages/Dashboard"
import Inventory from '../pages/Inventory'
import AddProduct from '../components/Inventory/add-product'
import RestockProduct from '../components/Inventory/restock-product'
import EditProduct from '../components/Inventory/edit-product'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import ForgotPassword from '../pages/FogotPassword'
import Shipment from '@/pages/Shipment'
import { useState } from 'react'
import ReturnAndRefunds from '@/pages/ReturnAndRefunds'
import Orders from '@/pages/Orders'
import Order from "../components/orders/order"
import SalesPersonnel from '@/pages/SalesPersonnel'
import UserProfile from "../components/salesPersonnel/userProfile"
import AddEmployee from "../components/salesPersonnel/add-employee/add-employee"
import Settings from '@/pages/Settings'
import HelpAndSupport from '@/pages/HelpAndSupport'

const AppLayout = () => {
    const location = useLocation();
    const noSidebarRoutes = ['/', '/login', '/signup', '/forgot'];
    const showSidebar = !noSidebarRoutes.includes(location.pathname);
    const [active, setActive] = useState("overview");

    return (
        <div className="flex min-h-screen">
            {showSidebar && <Sidebar />}
            <div className="flex-1">
                {showSidebar && <Header />}
                <main className={`${showSidebar ? "p-8" : ""} lg:pl-0 bg-gray-50`}>
                    <ReactRoutes>
                        {/* Auth Routes */}
                        <Route path='*' element={<Navigate to={'/login'} replace />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/forgot' element={<ForgotPassword />} />

                        {/* Dashboard Routes */}
                        <Route path="/dashboard" element={<DashboardPage setActive={setActive} />} />
                        <Route path="/inventory">
                            <Route path="" element={<Inventory />} />
                            <Route path="add-product" element={<AddProduct />} />
                            <Route path="restock-product/:id" element={<RestockProduct />} />
                            <Route path="edit-product/:id" element={<EditProduct />} />
                        </Route>
                        <Route path='/shipment' element={<Shipment active={active} setActive={setActive} />} />
                        <Route path='/return' element={<ReturnAndRefunds />} />
                        <Route path='/orders'>
                            <Route path='' element={<Orders />} />
                            <Route path='order/:id' element={<Order />} />
                        </Route>
                        <Route path='/sales'>
                            <Route path='' element={<SalesPersonnel />} />
                            <Route path='user/:id' element={<UserProfile />} />
                            <Route path='add-employee' element={<AddEmployee />} />
                        </Route>
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/help' element={<HelpAndSupport />} />
                    </ReactRoutes>
                </main>
            </div>
        </div>
    );
};


const AppRoutes = () => {
    return (
        <Router>
            <AppLayout />
        </Router>
    );
};

export default AppRoutes;
