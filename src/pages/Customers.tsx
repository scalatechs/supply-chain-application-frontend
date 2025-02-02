import { StatsCard } from "@/components/dashboard/stats-cards"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import CustomerOrders from "../components/customers/customers-orders"

const Customers = () => {
    return (
        <div className='w-full space-y-8'>
            <div className='flex items-center justify-end'>
                <Button variant="outline" className='flex items-center gap-2'>
                    <Link to="/sales/add-employee">+&nbsp; New Customer</Link>
                </Button>
            </div>

            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Total Customers"
                    value="239" icon={''}
                    trend={{ value: 1.30, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Active Customers"
                    value="94%"
                    icon={''}
                    trend={{ value: 0.82, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Average Retention"
                    value="89%"
                    icon={''}
                    trend={{ value: 1.79, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Return and Refunds"
                    value="12"
                    icon={''}
                    trend={{ value: 0.27, isPositive: false }}
                    comparison="Last week"
                />
            </div>

            <CustomerOrders />
        </div>
    )
}

export default Customers