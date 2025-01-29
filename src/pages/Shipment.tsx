import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import ShipmentPerformance from "../components/shipment/shipment-performance"
import TopSellingProducts from "../components/shipment/top-selling-products"
import ShipmentOrders from "@/components/shipment/shipment-orders"
import { Dispatch, SetStateAction } from "react"
import ShipmentTracking from "../components/shipment/shipment-tracking"

const Shipment = ({ active, setActive }: { active: string, setActive: Dispatch<SetStateAction<string>> }) => {
    return (
        <div className="space-y-8">
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between">
                <Tabs defaultValue="overviews">
                    <TabsList>
                        <TabsTrigger
                            onClick={() => setActive("overview")}
                            value="overviews">Overviews</TabsTrigger>
                        <TabsTrigger
                            onClick={() => setActive("tracking")}
                            value="tracking">Tracking</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {active == "overview" ?
                <div className="flex xl:flex-row flex-col items-start gap-4 w-full">
                    <ShipmentPerformance />
                    <TopSellingProducts />
                </div>
                :
                <ShipmentTracking />
            }

            {active == "overview" && <ShipmentOrders />}

        </div>
    )
}

export default Shipment