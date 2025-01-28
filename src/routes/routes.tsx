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

const AppLayout = () => {
    const location = useLocation();
    const noSidebarRoutes = ['/', '/login', '/signup',];
    const showSidebar = !noSidebarRoutes.includes(location.pathname);

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

                        {/* Dashboard Routes */}
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/inventory">
                            <Route path="" element={<Inventory />} />
                            <Route path="add-product" element={<AddProduct />} />
                            <Route path="restock-product/:id" element={<RestockProduct />} />
                            <Route path="edit-product/:id" element={<EditProduct />} />
                        </Route>
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
