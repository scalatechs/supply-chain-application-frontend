import { StatsCard } from "@/components/dashboard/stats-cards"
import OrdersComponent from "../components/orders/orders-orders"
import axios from "axios"
import { useEffect, useState } from "react"

const Orders = () => {

    const [orders, setOrders] = useState<any | []>([])
    const token = localStorage.getItem("token")

    const fetchOrderStats = async () => {
        try {
            const response = await axios.get('https://supply-chain-application-backend-1.onrender.com/api/v1/order-stats', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            console.log(response.data)
            setOrders(response.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchOrderStats();
    }, [])

    return (
        <div className='w-full space-y-8'>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Total Orders"
                    value={orders?.totalOrders?.count !== undefined ? orders.totalOrders.count : "0"}
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Fulfilled"
                    value={`${orders?.orderFulfilled?.count == undefined ? "0" : orders?.orderFulfilled?.count}`}
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Delivered"
                    value={`${orders?.orderDelivered?.count == undefined ? "0" : orders?.orderDelivered?.count}`}
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Cancelled "
                    value={`${orders?.orderCancelled?.count == undefined ? "0" : orders?.orderCancelled?.count}`}
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
            </div>

            <OrdersComponent />
        </div>
    )
}

export default Orders