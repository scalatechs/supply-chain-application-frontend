import { StatsCard } from "@/components/dashboard/stats-cards"
import { Button } from "@/components/ui/button"
import SalesPersonnelOrders from "../components/salesPersonnel/salesPersonnel-orders"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const SalesPersonnel = () => {

    const [salespersonSummary, setSalespersonSummary] = useState<any | []>([]);
    const token = localStorage.getItem("token")

    const fetchSummary = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/customer-summary",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
            setSalespersonSummary(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchSummary()
    }, [])

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
                    value="1" icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Sales Activity"
                    value="0%"
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Customer Retention"
                    value="0%"
                    icon={''}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Store Coverage"
                    value="0"
                    icon={''}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
            </div>

            <SalesPersonnelOrders />
        </div>
    )
}

export default SalesPersonnel