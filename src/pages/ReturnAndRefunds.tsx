import { StatsCard } from "@/components/dashboard/stats-cards"
import ReturnOrders from "@/components/return&refunds/return-orders"
import axios from "axios";
import { useEffect, useState } from "react"

const ReturnAndRefunds = () => {

    const [refundSummary, setRefundSummary] = useState<any | []>([]);
    const token = localStorage.getItem("token")

    const fetchData = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/stats",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

            setRefundSummary(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div className='w-full space-y-8'>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Pending Requests"
                    value={`${refundSummary?.pendingRequests == undefined ? "0" : refundSummary?.pendingRequests}`}
                    icon={''}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Refund Amount"
                    value={`${refundSummary?.totalApprovedRefundAmount?.toLocaleString() == undefined ? "0.00" : refundSummary?.totalApprovedRefundAmount?.toLocaleString()}`}
                    icon={''}
                    currency="Rs "
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Total Returned Items"
                    value={`${refundSummary?.totalReturnItems == undefined ? "0" : refundSummary?.totalReturnItems}`}
                    icon={''}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Request Approved"
                    value={`${refundSummary?.approvedRequests == undefined ? "0" : refundSummary?.approvedRequests}`}
                    icon={''}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
            </div>

            <ReturnOrders />
        </div>
    )
}

export default ReturnAndRefunds