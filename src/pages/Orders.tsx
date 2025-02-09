import { StatsCard } from "@/components/dashboard/stats-cards"
import OrdersComponent from "../components/orders/orders-orders"

const Orders = () => {
    return (
        <div className='w-full space-y-8'>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Total Orders"
                    value="0" icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Fulfilled"
                    value="0%"
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Delivered"
                    value="0%"
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Orders Cancelled "
                    value="0"
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