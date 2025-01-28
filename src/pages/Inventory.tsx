import { StatsCard } from '@/components/dashboard/stats-cards'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { InventoryOrders } from "@/components/Inventory/inventory-orders"

const Inventory = () => {
    return (
        <div className='w-full space-y-8'>
            <div className='flex items-center justify-end'>
                <Button variant="outline" className='flex items-center gap-2'><Link to="/inventory/add-product">Add New Product</Link></Button>
            </div>
            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard title="Total Inventory" value="5,20,000" icon={''} currency="Rs " />
                <StatsCard title="Units on Hand" value="1,200" icon={''} />
                <StatsCard title="Units on Order" value="3,000" icon={''} />
                <StatsCard title="Units to Reorder" value="500" icon={''} />
            </div>

            <InventoryOrders />
        </div >
    )
}

export default Inventory