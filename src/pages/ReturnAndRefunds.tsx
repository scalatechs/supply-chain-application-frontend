import { StatsCard } from "@/components/dashboard/stats-cards"
import ReturnOrders from "@/components/return&refunds/return-orders"

const ReturnAndRefunds = () => {
    return (
        <div className='w-full space-y-8'>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Pending Requests"
                    value="23" icon={''}
                    currency="Rs "
                    trend={{ value: 3.2, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Refund Amount"
                    value="12,021"
                    icon={''}
                    currency="Rs "
                    trend={{ value: 3.3, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Total Returned Items"
                    value="12"
                    icon={''}
                    trend={{ value: 1.7, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Request Approved"
                    value="12"
                    icon={''}
                    trend={{ value: 1.7, isPositive: false }}
                    comparison="Last week"
                />
            </div>

            <ReturnOrders />
        </div>
    )
}

export default ReturnAndRefunds