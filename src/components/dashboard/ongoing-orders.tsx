import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter, MoreHorizontal, Upload } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios"
import { useEffect, useState } from "react"

export function OngoingOrders() {

    const [order, setOrder] = useState<any | []>([])

    const token = localStorage.getItem("token")
    const fetchOrders = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/shipment",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                })
            setOrder(response.data.data)
            console.log(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <div className="rounded-lg border bg-white w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4 sm:gap-0">
                <h2 className="text-lg font-medium">Ongoing Orders</h2>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <Button variant="ghost" size="sm" className="border rounded-lg flex-1 sm:flex-none">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Button variant="ghost" size="sm" className="border rounded-lg flex-1 sm:flex-none">
                        <Upload className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Desktop view */}
            <div className="hidden md:block">
                <ScrollArea className="w-full">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12"></TableHead>
                                <TableHead>Order Id</TableHead>
                                <TableHead>Shipping ID</TableHead>
                                <TableHead>Dispatched Date</TableHead>
                                <TableHead>Shipping Method</TableHead>
                                <TableHead>Fee</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {orders.map((order: any) => ( */}
                            <TableRow key={order._id}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>{order._id}</TableCell>
                                <TableCell>{order.orderId}</TableCell>
                                <TableCell>{order.estimatedDelivery}</TableCell>
                                <TableCell>{order.shippingMethod}</TableCell>
                                <TableCell>{order.shippingcost}</TableCell>
                                <TableCell>
                                    <span
                                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${order.status === "Delivered"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                            {/* ))} */}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </div>

            {/* Mobile view */}
            <div className="md:hidden">
                <div className="divide-y">
                    {/* {orders.map((order) => ( */}
                    <div key={order.id} className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <Checkbox />
                                <span className="font-medium">{order.id}</span>
                            </div>
                            <span
                                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${order.status === "Delivered"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                    }`}
                            >
                                {order.status}
                            </span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Shipping ID:</span>
                                <span>{order.shippingId}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Dispatch Date:</span>
                                <span>{order.dispatchDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Method:</span>
                                <span>{order.method}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Fee:</span>
                                <span>{order.fee}</span>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
    )
}