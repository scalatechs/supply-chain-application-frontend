import { StatsCard } from "@/components/dashboard/stats-cards"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { StockAvailability } from "@/components/dashboard/stock-availability"
import { OngoingOrders } from "@/components/dashboard/ongoing-orders"
import Shoppingcart from "../assets/local_shipping_24dp_5F6368_FILL0_wght300_GRAD0_opsz24.svg"
import box from "../assets/package (2).svg"
import revenue from "../assets/payments_24dp_5F6368_FILL0_wght300_GRAD0_opsz24.svg"
import check from "../assets/check_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom"
import ProductPopup from "@/components/product-popup"
import { Dispatch, SetStateAction, useState } from "react"

function Dashboard({ setActive }: { setActive: Dispatch<SetStateAction<string>> }) {
=======
import { Link } from "react-router-dom"
import ProductPopup from "@/components/product-popup"
import { useState } from "react"

function Dashboard() {
>>>>>>> main
    const [showPopup, setShowPopup] = useState(false)

    const handleBackdropClick = () => {
        setShowPopup(false)
    }

<<<<<<< HEAD
    const navigate = useNavigate();

=======
>>>>>>> main
    return (
        <div className="space-y-8" onClick={handleBackdropClick}>
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between">
                <Tabs defaultValue="overviews">
                    <TabsList>
                        <TabsTrigger value="overviews">Overviews</TabsTrigger>
<<<<<<< HEAD
                        <TabsTrigger
                            onClick={() => {
                                navigate('/shipment')
                                setActive("tracking")
                            }
                            }
                            value="tracking">Tracking</TabsTrigger>
=======
                        <TabsTrigger value="tracking">Tracking</TabsTrigger>
>>>>>>> main
                    </TabsList>
                </Tabs>
                <div className="flex items-center gap-4">
                    <Select defaultValue="week">
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="day">Day</SelectItem>
                            <SelectItem value="week">Week</SelectItem>
                            <SelectItem value="month">Month</SelectItem>
                            <SelectItem value="year">Year</SelectItem>
                        </SelectContent>
                    </Select>
                    <Link to="/inventory/add-product"><Button variant="outline">Add New Product</Button></Link>
                </div>
            </div>

            {/* Cards  */}
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Total Shipments"
                    value="71.21"
                    icon={Shoppingcart}
                    trend={{ value: 3.2, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Total Orders"
                    value="92"
                    icon={box}
                    trend={{ value: 3.3, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Revenue"
                    value="Rs 13.71K"
                    icon={revenue}
                    trend={{ value: 1.7, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Delivered"
                    value="140"
                    icon={check}
                    trend={{ value: 4.7, isPositive: true }}
                    comparison="Last week"
                />
            </div>

            <div className="grid gap-4 xl:grid-cols-2 grid-cols-1">
                {/* Total Sales */}
                <SalesChart />

                {/* Stock Availability */}
                <div onClick={(e) => {
                    e.stopPropagation();
                    setShowPopup(true);
                }} className="cursor-pointer">
                    <StockAvailability />
                </div>
            </div>

            {/* Inventory Product Popups */}
            <ProductPopup show={showPopup} />

            {/* Ongoing Orders Table */}
            <OngoingOrders />
<<<<<<< HEAD
        </div >
=======
        </div>
>>>>>>> main
    )
}

export default Dashboard
