import { useContext } from "react"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { InventoryContext } from "@/context/inventory-context"
import { TrendingDown, TrendingUp } from "lucide-react"

const topSellingProducts = () => {

    const { inventory } = useContext(InventoryContext)

    return (
        <Card className="xl:w-[45%] w-full">
            <CardHeader>
                <div className="flex items-center justify-between w-full">
                    <CardTitle className="font-medium text-xl">Top Selling Products</CardTitle>
                    <span className="underline text-sm text-neutral-600">See all</span>
                </div>
            </CardHeader>

            <div className="w-full flex items-end justify-between px-6">
                <h1 className="md:text-4xl text-2xl font-medium">Rs 34.89k</h1>
                <span className="text-sm text-neutral-600">Since Last Week</span>
            </div>

            {/* Products */}
            <div className="w-full flex flex-col items-start gap-4 p-6 mt-8">
                {inventory.map((item, idx) => (
                    <div key={idx} className="w-full flex items-center justify-between">
                        <img src={item.image} className="w-10 h-10 rounded-full object-fit" alt="" />
                        <div className="w-52 pl-6">
                            <h3 className="text-base">{item.name}</h3>
                            <p className="text-sm text-neutral-600">{item.category}</p>
                        </div>
                        {idx % 2 == 0 ?
                            <TrendingUp className="text-green-500" />
                            :
                            <TrendingDown className="text-red-500" />
                        }
                        <p className="text-sm w-1/4 flex justify-end">Rs {item.price}</p>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default topSellingProducts