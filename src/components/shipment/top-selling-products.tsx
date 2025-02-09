import { useContext } from "react"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { TrendingUp } from "lucide-react"
import { ShipmentContext } from "@/context/shipment-context"

const topSellingProducts = () => {

    const { shipment }: any = useContext(ShipmentContext)

    return (
        <Card className="xl:w-[45%] w-full">
            <CardHeader>
                <div className="flex items-center justify-between w-full">
                    <CardTitle className="font-medium text-xl">Top Selling Products</CardTitle>
                    <span className="underline text-sm text-neutral-600">See all</span>
                </div>
            </CardHeader>

            <div className="w-full flex items-end justify-between px-6">
                <h1 className="md:text-4xl text-2xl font-medium">Rs {shipment.shippingcost}</h1>
                <span className="text-sm text-neutral-600">Since Last Week</span>
            </div>

            {/* Products */}
            <div className="w-full flex flex-col items-start gap-4 p-6 mt-8">
                {/* {shipment.map((item: any, idx: number) => ( */}
                <div key={shipment.orderId} className="w-full flex items-center justify-between">
                    <img src="https://imgs.search.brave.com/qynkRPgLBr88v1q13i9vUhhU_LqBEadldHkwI7dlNsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVz/aGNlbnRyYWxncm9j/ZXJ5LmNvbS9jZG4v/c2hvcC9maWxlcy93/YWl3YWkud2VicD92/PTE3MjM4MjMwNjcm/d2lkdGg9MTQ0NQ" className="w-12 h-12 rounded-lg object-fit" alt="" />
                    <div className="w-52 pl-6">
                        <h3 className="text-base">Wai Wai Noodles</h3>
                        <p className="text-sm text-neutral-600">{shipment.category}</p>
                    </div>

                    <TrendingUp className="text-green-500" />

                    <p className="text-sm w-1/4 flex justify-end">Rs {shipment.shippingcost}</p>
                </div>
                {/* ))} */}
            </div>
        </Card>
    )
}

export default topSellingProducts