import { StatsCard } from '@/components/dashboard/stats-cards'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { InventoryOrders } from "@/components/Inventory/inventory-orders"
import axios from 'axios'
import { useEffect, useState } from 'react'

const Inventory = () => {

    const [data, setData] = useState<any | []>([])

    const inventorySummary = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/inventory", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            setData(response.data)
            console.log(response)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        inventorySummary();
    }, [])

    return (
        <div className='w-full space-y-8 overysc'>
            <div className='flex items-center justify-end'>
                <Button variant="outline" className='flex items-center gap-2'><Link to="/inventory/add-product">Add New Product</Link></Button>
            </div>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard title="Total Inventory"
                    value={`${data?.data?.totalInventory.toLocaleString()}`}
                    icon={''}
                    currency="Rs " />
                <StatsCard title="Units on Hand"
                    value={`${data?.data?.totalUnitsOnHand}`}
                    icon={''} />
                <StatsCard title="Units on Order"
                    value={`${data?.data?.unitsOnOrder}`}
                    icon={''} />
                <StatsCard title="Units to Reorder"
                    value={`${data?.data?.unitToreorder.length}`}
                    icon={''} />
            </div>

            <InventoryOrders />
        </div >
    )
}

export default Inventory