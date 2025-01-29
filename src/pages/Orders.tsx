import { StatsCard } from "@/components/dashboard/stats-cards"
import OrdersComponent from "../components/orders/orders-orders"

const Orders = () => {
    return (
        <div className='w-full space-y-8'>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Total Orders"
                    value="512" icon={''}
                    trend={{ value: 2.11, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Fulfilled"
                    value="92%"
                    icon={''}
                    trend={{ value: 1.7, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Delivered"
                    value="98%"
                    icon={''}
                    trend={{ value: 1.12, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Cancelled "
                    value="12"
                    icon={''}
                    trend={{ value: 0.27, isPositive: false }}
                    comparison="Last week"
                />
            </div>

            <OrdersComponent />
        </div>
    )
}

export default Orders