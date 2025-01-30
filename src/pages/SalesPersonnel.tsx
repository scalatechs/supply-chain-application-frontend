import { StatsCard } from "@/components/dashboard/stats-cards"
import { Button } from "@/components/ui/button"
import SalesPersonnelOrders from "../components/salesPersonnel/salesPersonnel-orders"
import { Link } from "react-router-dom"

const SalesPersonnel = () => {
    return (
        <div className='w-full space-y-8'>
            <div className='flex items-center justify-end'>
                <Button variant="outline" className='flex items-center gap-2'>
                    <Link to="/sales/add-employee">+&nbsp; New Employee</Link>
                </Button>
            </div>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Total Employees"
                    value="239" icon={''}
                    trend={{ value: 1.30, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Sales Activity"
                    value="94%"
                    icon={''}
                    trend={{ value: 0.82, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Customer Retention"
                    value="89%"
                    icon={''}
                    trend={{ value: 1.79, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Store Coverage"
                    value="72"
                    icon={''}
                    trend={{ value: 0.27, isPositive: false }}
                    comparison="Last week"
                />
            </div>

            <SalesPersonnelOrders />
        </div>
    )
}

export default SalesPersonnel