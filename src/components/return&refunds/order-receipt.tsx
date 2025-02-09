import { useParams } from "react-router-dom";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import axios from "axios";

const orderReceipt = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<any | []>([]);

    const token = localStorage.getItem("token");
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://supply-chain-application-backend-1.onrender.com/api/v1/refund/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            setProduct(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    if (!product) {
        return <div>Product not found</div>
    }


    return (
        <div className="xl:w-2/3 w-full flex flex-col items-start gap-6">
            <div className="w-full rounded-lg p-4 border">
                <h1 className="text-2xl font-medium flex md:flex-row flex-col md:items-center items-start">
                    Order Receipt&nbsp;&nbsp;
                    <span className="bg-[#fadbdb] mr-2 text-red-600 py-1 px-4 rounded-lg text-sm">
                        Damaged Goods
                    </span>
                </h1>

                <div className="mt-4 flex flex-col items-start gap-2 md:text-base text-sm">
                    <h3 className="text-neutral-600">Order ID:&nbsp;
                        <span className="text-black">#{product[0]?._id}</span>
                    </h3>
                    <h3 className="text-neutral-600">Date:&nbsp;
                        <span className="text-black">{product[0]?.createdAt}</span>
                    </h3>
                    <h3 className="text-neutral-600">Customer ID:&nbsp;
                        <span className="text-black">#{product[0]?.customerId}</span>
                    </h3>
                    <h3 className="text-neutral-600">Sales Representative:&nbsp;
                        <span className="text-black capitalize">{product[0]?.salesRepresentative}</span>
                    </h3>
                    <h3 className="text-neutral-600">Billing Address:&nbsp;
                        <span className="text-black capitalize">{product[0]?.billingAddress}</span>
                    </h3>
                </div>

                <Separator className="my-4" />

                <div className="mt-4 flex flex-wrap gap-6 items-start md:justify-between w-full">
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Product</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx}>{item._id}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Price</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx}>{item.price}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Quantity</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx}>{item.quantity}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col items-start gap-2 md:text-base text-sm">
                        <li className="text-neutral-600">Total</li>
                        {product[0]?.orderItems?.map((item: any, idx: number) => (
                            <li key={idx}>Rs {item.total.toLocaleString()}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-full rounded-lg p-4 border">
                <h1 className="text-2xl font-medium flex md:flex-row flex-col md:items-center items-start">
                    Payment Receipt&nbsp;&nbsp;
                    <span className="bg-green-100 mr-2 text-green-600 py-1 px-4 rounded-lg text-sm">
                        Paid
                    </span>
                </h1>

                <div className="flex items-start justify-between w-full">
                    <ul className="mt-4 text-neutral-600 font-medium text-sm flex flex-col items-start gap-2">
                        <li>Sub-total</li>
                        <li>Shipping charge</li>
                        <li>Discount</li>
                        <li>Tax</li>
                        <li className="text-base font-medium text-black">Total</li>
                        <li className="mt-4 text-black text-lg">Paid by the customer</li>
                    </ul>

                    <ul className="mt-4 text-sm font-medium flex flex-col items-start gap-2">
                        <li>Rs {product[0]?.paymentDetails?.subtotal?.toFixed(2).toLocaleString()}</li>
                        <li>
                            Rs {product[0]?.paymentDetails?.shippingCharge?.toFixed(2).toLocaleString()}
                        </li>
                        <li className="text-green-600">
                            {product[0]?.paymentDetails?.discount?.toFixed(2).toLocaleString()}%
                        </li>
                        <li className="text-red-600">
                            {product[0]?.paymentDetails?.tax?.toFixed(2).toLocaleString()}%
                        </li>
                        <li className="text-base font-medium">
                            Rs {product[0]?.paymentDetails?.total?.toFixed(2).toLocaleString()}
                        </li>
                        <li className="mt-4 text-green-600 text-lg">
                            Rs {product[0]?.paymentDetails?.total?.toFixed(2).toLocaleString()}
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default orderReceipt