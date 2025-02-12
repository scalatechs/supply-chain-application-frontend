import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import axios from "axios";
import { PencilLine } from "lucide-react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const orderDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState<any | []>([])
    const token = localStorage.getItem("token")

    const fetchOrderDetails = async () => {
        try {
            const response = await axios.get(`https://supply-chain-application-backend-1.onrender.com/api/v1/order/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            setDetails(response.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchOrderDetails()
    }, [])

    return (
        <div className="xl:w-2/3 w-full flex flex-col items-start gap-6">
            <div className="w-full rounded-lg p-4 border">
                <h1 className="text-2xl font-medium flex items-center">
                    Order Items&nbsp;&nbsp;
                    <span className="bg-[#f9ebd2] text-orange-400 mr-2 py-1 px-4 rounded-lg text-sm">
                        {details[0]?.order_status}
                    </span>
                </h1>

                <div className="md:block hidden mt-4">
                    <ScrollArea className="w-full">
                        <Table>
                            <TableHeader>
                                <TableRow className="font-semibold">
                                    <TableHead>Product Description</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Discount</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {details[0]?.orderItems?.map((product: any, idx: number) => (
                                    <TableRow key={idx}>
                                        <TableCell className="flex items-start gap-2">
                                            <img src="" className="w-20 h-20 border p-1 rounded-lg mr-4 object-contain" alt="" />
                                            <div className="flex flex-col items-start gap-1">
                                                <h3 className="text-neutral-600 text-xs"></h3>
                                                <h1 className="text-base font-medium capitalize">
                                                    {product?.productdetails?.product_name}
                                                </h1>
                                                <p className="text-neutral-600 text-[0.65rem]">FKU : {product?.productdetails?.FKU}</p>
                                                <p className="text-neutral-600 capitalize text-[0.65rem]">Category : {product?.category?.category_name}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            Rs. {product?.price?.toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            {product?.quantity}
                                        </TableCell>
                                        <TableCell>
                                            {product?.discount}%
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            Rs. {product?.total_price.toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            <PencilLine color="gray" size={'17px'} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </div>
            </div>

            <div className="w-full rounded-lg p-4 border">
                <div className="text-2xl font-medium flex items-center">
                    Payment Receipt&nbsp;&nbsp;
                    <h3 className="bg-[#f9ebd2] text-sm text-orange-400 py-1 px-4 rounded-lg">
                        {details[0]?.order_status}
                    </h3>
                </div>

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
                        <li>Rs {details[0]?.total_amount}</li>
                        <li className="capitalize">{details[0]?.customerDetails?.preferredShippingMethod}</li>
                        <li className="text-green-600">
                            {
                                details[0]?.orderItems?.reduce((total: number, current: any) => total + current?.discount, 0)
                            } %
                        </li>
                        <li className="text-red-600">0%</li>
                        <li className="text-base font-medium">
                            Rs {details[0]?.total_amount}
                        </li>
                        <li className="mt-4 text-black text-lg flex items-center gap-2">
                            Rs {details[0]?.total_amount}
                            <PencilLine size={'17px'} color="gray" />
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default orderDetails