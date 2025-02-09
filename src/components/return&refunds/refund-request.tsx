import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { Button } from "../ui/button";
import { Calendar, Check, ChevronLeft, X } from "lucide-react";
import OrderReceipt from "../return&refunds/order-receipt"
import CustomerDetails from "../return&refunds/customer-details"
import axios from "axios";
import { ReturnContext } from "@/context/return-context";

const refundRequest = () => {
    const { id } = useParams();
    const { returnItems } = useContext(ReturnContext);
    const product = returnItems.find(item => item._id === id);

    if (!product) {
        return <div>Product not found</div>
    }

    //approve product status
    const approveProduct = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.patch(
                `https://supply-chain-application-backend-1.onrender.com/api/v1/refund/${id}`,
                {
                    "status": "APPROVED"
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status == 200) {
                alert(`Product ${id} approved!`)
            }
        } catch (error: any) {
            alert(`Error: ${error.message}`,);
        }
    };

    //approve product status
    const rejectProduct = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.patch(
                `https://supply-chain-application-backend-1.onrender.com/api/v1/refund/${id}`,
                {
                    "status": "REJECTED"
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status == 200) {
                alert(`Product ${id} rejected!`)
            }
        } catch (error: any) {
            alert(`Error: ${error.message}`,);
        }
    };

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

                            {product?.status?.toLowerCase() == "approved" && <h3 className="bg-green-100 text-green-600 py-1 px-4 rounded-lg">{product?.status}</h3>}

                            {product?.status?.toLowerCase() == "pending" && <h3 className="bg-[#f9ebd2] text-orange-400 py-1 px-4 rounded-lg">{product?.status}</h3>}


                            <h3 className="bg-[#fadbdb] uppercase mr-2 text-red-600 py-1 px-4 rounded-lg">
                                {product?.reason}
                            </h3>
                            <p className="lg:inline hidden">|</p>
                            <Calendar size={'24px'} className="ml-2 lg:inline hidden" />
                            <p>December 12, 2024 at 10:14 am</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div
                        onClick={approveProduct}
                        className="flex items-center gap-2 p-2 bg-[#ecf7e6] text-green-700 rounded-md border border-green-700">
                        <Check size={'20px'} />
                        <span>Approve</span>
                    </div>
                    <div
                        onClick={rejectProduct}
                        className="flex items-center gap-2 p-2 bg-[#ffe6e6] text-red-700 rounded-md border border-red-700">
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