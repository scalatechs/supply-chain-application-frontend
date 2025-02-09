import { StatsCard } from "@/components/dashboard/stats-cards"
import ReturnOrders from "@/components/return&refunds/return-orders"
import axios from "axios";
import { useEffect, useState } from "react"

const ReturnAndRefunds = () => {

    const [refundSummary, setRefundSummary] = useState<any | []>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/stats")
            setRefundSummary(response.data.data)
        } catch (error: any) {
            alert(`Error: ${error.message}`)
        }
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div className='w-full space-y-8'>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Pending Requests"
                    value={`${refundSummary?.pendingRequests}`}
                    icon={''}
                    trend={{ value: 3.2, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Refund Amount"
                    value={`${refundSummary?.totalApprovedRefundAmount?.toLocaleString()}`}
                    icon={''}
                    currency="Rs "
                    trend={{ value: 3.3, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Total Returned Items"
                    value={`${refundSummary?.totalReturnItems}`}
                    icon={''}
                    trend={{ value: 1.7, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Request Approved"
                    value={`${refundSummary?.approvedRequests}`}
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