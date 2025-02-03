import { InventoryContext } from "@/context/inventory-context";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { Button } from "../ui/button";
import { Calendar, Check, ChevronLeft, X } from "lucide-react";
import OrderReceipt from "../return&refunds/order-receipt"
import CustomerDetails from "../return&refunds/customer-details"

const refundRequest = () => {
    const { id } = useParams();
    const { inventory } = useContext(InventoryContext);
    const product = inventory.find(item => item.id === id);

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="flex flex-col items-start gap-6 w-full">

            <div className="w-full flex xl:flex-row flex-col xl:items-center items-start xl:gap-0 gap-4 justify-between">
                <div className="flex xl:flex-row flex-col xl:items-center items-start gap-4">
                    <Link to="/return" className="flex items-center gap-2">
                        <Button variant="outline">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="text-3xl font-medium">Refund Request</h1>
                        <div className="flex lg:flex-row flex-col xl:items-center items-start gap-2 text-sm">
                            <h3 className="bg-[#f9ebd2] text-orange-400 py-1 px-4 rounded-lg">Pending</h3>
                            <h3 className="bg-[#fadbdb] mr-2 text-red-600 py-1 px-4 rounded-lg">Damaged Goods

                            </h3>
                            <p className="lg:inline hidden">|</p>
                            <Calendar size={'24px'} className="ml-2 lg:inline hidden" />
                            <p>December 12, 2024 at 10:14 am</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 p-2 bg-[#ecf7e6] text-green-700 rounded-md border border-green-700">
                        <Check size={'20px'} />
                        <span>Approve</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#ffe6e6] text-red-700 rounded-md border border-red-700">
                        <X size={'20px'} />
                        <span>Reject</span>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-4">
                {/* Order Details */}
                <OrderReceipt />

                {/* Customer Details */}
                <CustomerDetails />
            </div>

        </div >
    )
}

export default refundRequest