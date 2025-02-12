import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Button } from "../ui/button";
import { Calendar, ChevronLeft, Printer } from "lucide-react";
import OrderDetails from "../orders/order-details"
import CustomerDetails from "../orders/customer-details"
import logo from "../../assets/Nav-mainlogo.svg"
import { Separator } from "../ui/separator";
import axios from "axios";

const order = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<any | []>([])
    const token = localStorage.getItem("token")
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://supply-chain-application-backend-1.onrender.com/api/v1/order/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            setProduct(response.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    if (!product) {
        return <div>Product not found</div>
    }

    const [showReceipt, setShowReceipt] = useState(false)

    return (
        <div className="flex flex-col items-start gap-6 w-full">

            {/* Overlay */}
            <div className={`${showReceipt ? "visible" : "invisible"} bg-black inset-0 fixed bg-opacity-50 z-40`}></div>

            <div className="w-full flex xl:flex-row flex-col xl:items-center items-start xl:gap-0 gap-4 justify-between">
                <div className="flex xl:flex-row flex-col xl:items-center items-start gap-4">
                    <Link to="/orders" className="flex items-center gap-2">
                        <Button variant="outline">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="text-3xl font-medium">Order ID: {product[0]?._id}</h1>
                        <div className="flex lg:flex-row flex-col xl:items-center items-start gap-2 text-sm">
                            <h3 className="bg-[#f9ebd2] text-orange-400 py-1 px-4 rounded-lg">
                                {product[0]?.order_status}
                            </h3>
                            <p className="lg:inline hidden">|</p>
                            <Calendar size={'24px'} className="ml-2 lg:inline hidden" />
                            <p>{product[0]?.createdAt}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowReceipt(true)}
                        className="flex items-center gap-2 border border-[#003dff] p-3 rounded-lg text-[#003dff]">
                        <Printer size={'20px'} />
                        Print Receipt
                    </button>
                    <button className="bg-[#003dff] text-white p-3 rounded-lg">
                        Fulfill Order
                    </button>

                </div>

            </div>

            <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-4">
                {/* Order Details */}
                <OrderDetails />

                {/* Customer Details */}
                <CustomerDetails />
            </div>

            {/* Receipt */}
            <div
                className={`${showReceipt ? "visible -translate-y-1/2" : "invisible translate-y-full"} absolute top-1/2 left-1/2 transition-all duration-500 transform -translate-x-1/2 border p-6 rounded-md bg-white z-50`}>
                <img src={logo} alt="" />

                <h1 className="text-3xl mt-12">Order Receipt</h1>
                <ul className="text-xs mt-6 flex flex-col gap-2">
                    <li><span className="text-neutral-700">
                        Order ID</span>:&nbsp;&nbsp;
                        #{product[0]?._id}
                    </li>
                    <li><span className="text-neutral-700">Date</span>:&nbsp;&nbsp;
                        {product[0]?.createdAt}
                    </li>
                    <li><span className="text-neutral-700">
                        Customer ID</span>:&nbsp;&nbsp; {product[0]?.customerDetails?.customerId}
                    </li>
                    <li className="capitalize">
                        <span className="text-neutral-700">Billing Address</span>
                        :&nbsp;&nbsp; {product[0]?.shippingDetails?.Address}
                    </li>
                </ul>

                <Separator className="my-6" />

                <div className="flex items-start gap-20 w-full">
                    <ul className="text-xs flex flex-col gap-3">
                        <li className="text-neutral-600">Product</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx} className="capitalize">{item?.productdetails?.product_name}</li>
                        ))}
                    </ul>
                    <ul className="text-xs flex flex-col gap-3">
                        <li className="text-neutral-600">Price</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx} className="capitalize">{item?.discount}%</li>
                        ))}
                    </ul>
                    <ul className="text-xs flex flex-col gap-3">
                        <li className="text-neutral-600">Quantity</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx} className="capitalize">{item?.quantity}</li>
                        ))}
                    </ul>
                    <ul className="text-xs flex flex-col gap-3">
                        <li className="text-neutral-600">Total</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx} className="capitalize">Rs. {item?.total_price?.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>

                <Separator className="my-6" />

                <div className="w-full flex flex-col items-end">
                    <ul className="text-xs text-right flex flex-col gap-2">
                        <li><span className="text-neutral-700">
                            Subtotal</span>:&nbsp;&nbsp;
                            Rs. {product[0]?.total_amount?.toFixed(2)}
                        </li>
                        <li><span className="text-neutral-700 capitalize">
                            Shipping Charge</span>:&nbsp;&nbsp;
                            {product[0]?.customerDetails?.preferredShippingMethod}
                        </li>
                        <li><span className="text-neutral-700">
                            Discount</span>:&nbsp;&nbsp;
                            {
                                product[0]?.orderItems?.reduce((total: number, current: any) => total + current?.discount, 0)
                            } %
                        </li>
                        <li><span className="text-neutral-700">Tax</span>:&nbsp;&nbsp; 0%</li>
                        <li className="font-medium"><span className="text-neutral-900">Total</span>:&nbsp;&nbsp;
                            Rs. {product[0]?.total_amount?.toFixed(2)}
                        </li>
                    </ul>
                </div>

                <button
                    onClick={() => setShowReceipt(false)}
                    className="w-full py-3 bg-blue-600 text-white font-medium rounded-md mt-6 flex items-center justify-center gap-4">
                    <Printer />
                    Save Receipt
                </button>
            </div>
        </div >
    )
}

export default order