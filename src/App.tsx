import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from "./components/layout/sidebar"
import { Header } from "./components/layout/header"
import DashboardPage from "./pages/Dashboardpage"
import Inventory from './pages/Inventory'
import AddProduct from './components/Inventory/add-product'
import RestockProduct from './components/Inventory/restock-product'
import EditProduct from './components/Inventory/edit-product'

function App() {

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-8 lg:pl-0 bg-gray-50">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/inventory">
                <Route path="" element={<Inventory />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="restock-product/:id" element={<RestockProduct />} />
                <Route path="edit-product/:id" element={<EditProduct />} />
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

