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
import { Link, useNavigate } from "react-router-dom"
import ProductPopup from "@/components/product-popup"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import axios from "axios"

function Dashboard({ setActive }: { setActive: Dispatch<SetStateAction<string>> }) {
    const [showPopup, setShowPopup] = useState(false)

    const handleBackdropClick = () => {
        setShowPopup(false)
    }
    const navigate = useNavigate();

    const [data, setData] = useState<any | []>([]);
    const token = localStorage.getItem("token")

    const fetchSummary = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/dashboard/orders", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            setData(response.data.data)
            console.log(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchSummary()
    }, [])

    return (
        <div className="space-y-8" onClick={handleBackdropClick}>
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between">
                <Tabs defaultValue="overviews">
                    <TabsList>
                        <TabsTrigger value="overviews">Overviews</TabsTrigger>
                        <TabsTrigger
                            onClick={() => {
                                navigate('/shipment')
                                setActive("tracking")
                            }
                            }
                            value="tracking">Tracking</TabsTrigger>
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
                    value={`${data?.totalShipments == undefined ? "0.00" : data?.totalShipments}`}
                    icon={Shoppingcart}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Total Orders"
                    value={`${data?.totalOrder == undefined ? "0.00" : data?.totalOrder}`}
                    icon={box}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Revenue"
                    value={`Rs. ${data?.totalRevenue?.toFixed(2) == undefined ? "0.00" : data?.totalRevenue?.toFixed(2)}`}
                    icon={revenue}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Delivered"
                    value={`Rs. ${data?.totalDelivered == undefined ? "0.00" : data?.totalDelivered}`}
                    icon={check}
                    trend={{ value: 0, isPositive: true }}
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
        </div >
    )
}

export default Dashboard
