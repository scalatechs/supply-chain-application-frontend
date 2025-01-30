import { Ellipsis } from "lucide-react"
import ProductSales from "../Inventory/product-sales"

const userSales = () => {
    return (
        <div className='xl:w-1/2 w-full flex flex-col items-start gap-6'>
            <div className='border rounded-lg flex flex-col items-start w-full p-4'>
                <div className="w-full flex items-start justify-between">
                    <h1 className='text-xl md:text-2xl capitalize mb-4 font-medium px-4 mt-4'>Product Sales Statistics</h1>
                    <Ellipsis />
                </div>
                <ProductSales units={39} />
            </div>
        </div>
    )
}

export default userSales