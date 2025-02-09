// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Filter, MoreHorizontal, Search, Upload } from 'lucide-react'
import { useEffect, useRef, useState } from "react"
// import { Link } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
import CalendarComponent from "@/components/ui/calendar"
// import { OrdersContext } from "@/context/orders-context"

export default function Orders() {
    // const { orders } = useContext(OrdersContext);
    const [showCalendar, setShowCalendar] = useState(false)
    const calendarRef = useRef<HTMLDivElement>(null);

    // Hide calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node)
            ) {
                setShowCalendar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="rounded-lg bg-white w-full">

            {/* Overlay */}
            <div className={`${showCalendar ? "visible" : "invisible"} bg-black inset-0 fixed bg-opacity-50 z-40`}></div>

            {/* Responsive tabs */}
            <ScrollArea className="w-full">
                <div className="flex flex-wrap md:items-center items-start md:gap-0 gap-2 border-b border-gray-300 md:min-w-max w-full">
                    <button className="text-blue-600 font-medium border-b-2 border-blue-600 px-4 py-2 whitespace-nowrap md:text-sm text-xs">
                        All
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Unfulfilled
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Unpaid
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        In Transit
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Completed
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Cancelled
                    </button>
                </div>
            </ScrollArea>

            {/* Responsive search and actions */}
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4 pb-4 pt-4">
                <form className="flex items-center gap-2 border rounded-lg pl-2 w-full md:w-64">
                    <button type="submit">
                        <Search className="h-4 w-4 text-neutral-500" />
                    </button>
                    <input
                        placeholder="Search Salesperson..."
                        className="outline-none border-none pr-4 py-1.5 md:text-sm text-xs w-full"
                    />
                </form>

                <div className="flex flex-wrap md:items-center items-start gap-2 w-full sm:w-auto">
                    <Button
                        onClick={() => setShowCalendar(!showCalendar)}
                        variant="ghost"
                        size="sm"
                        className="border rounded-lg flex-1 sm:flex-none">
                        <Calendar className="mr-2 h-4 w-4" />
                        < span className="text-sm font-normal">{new Date().toLocaleDateString()}</span>
                    </Button>
                    {showCalendar && (
                        <div ref={calendarRef} className="fixed top-[42%] right-72 z-50">
                            <CalendarComponent
                                mode="single"
                                className="rounded-md border bg-white"
                            />
                        </div>
                    )
                    }
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
            {/* <div className="hidden md:block">
                <ScrollArea className="w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="font-semibold">
                                <TableHead>Order Id</TableHead>
                                <TableHead>Order Created</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Destination</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Receipt</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell className="flex items-center gap-2 h-16">
                                        <Checkbox /><span className="mt-1">{order._id}</span>
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        {new Date().toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        John Doe
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        Kathmandu, Nepal
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        Rs. {order.price}
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        <span
                                            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700`}
                                        >
                                            In-delivery
                                        </span>
                                    </TableCell>
                                    <TableCell className="underline text-blue-500">
                                        <Link to={`/orders/order/${order._id}`}>View details</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </div> */}

            {/* Mobile view */}
            {/* <div className="md:hidden px-4">
                <div className="divide-y">
                    {orders.map((order) => (
                        <div key={order._id} className="py-4">
                            <div className="flex items-start gap-4">
                                <Checkbox className="mt-2" />
                                <div className="flex-1">
                                    <div className="mb-2">
                                        <span className="text-lg text-neutral-700 capitalize block">
                                            Order Id: {order._id}
                                        </span>
                                        <span className="text-sm text-neutral-500">
                                            Order Created: {new Date().toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Customer:</span>
                                            <span className="text-neutral-700">John Doe</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Destination:</span>
                                            <span className="text-neutral-700">Kathmandu, Nepal</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Total:</span>
                                            <span className="text-neutral-700">Rs. {order.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Status:</span>
                                            <span
                                                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700`}
                                            >
                                                In-delivery
                                            </span>
                                        </div>
                                        <div className="flex justify-end mt-2 underline text-blue-500">
                                            <Link to={`/orders/order/${order._id}`}>View details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            <h3 className="w-full text-center">No orders yet</h3>
        </div>
    )
}