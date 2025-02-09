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
import { Calendar, Check, ChevronRight, Filter, MoreHorizontal, Search, Upload, X } from 'lucide-react'
import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
import CalendarComponent from "@/components/ui/calendar"
import { ReturnContext } from "@/context/return-context"
import axios from "axios"

export default function ReturnOrders() {
    const { returnItems } = useContext(ReturnContext);
    const [showCalendar, setShowCalendar] = useState(false)
    const calendarRef = useRef<HTMLDivElement>(null);

    //approve product status
    const approveProduct = async (id: string) => {
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
    const rejectProduct = async (id: string) => {
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
                        Pending Requests
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Approved Requests
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Rejected Requests
                    </button>
                </div>
            </ScrollArea>

            {/* Responsive search and actions */}
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4 pb-4 pt-4 px-4">
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
            <div className="hidden md:block">
                <ScrollArea className="w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="font-semibold">
                                <TableHead>Order Id</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Customer Id</TableHead>
                                <TableHead>Sales Representative</TableHead>
                                <TableHead>Reason</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {returnItems.map((product, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="flex items-center gap-2 h-16">
                                        <Checkbox /><span className="mt-1">{product._id}</span>
                                    </TableCell>
                                    <TableCell>
                                        {product.createdAt}
                                    </TableCell>
                                    <TableCell className="text-sm text-neutral-700">
                                        # {product.customerId}
                                    </TableCell>
                                    <TableCell className="text-sm text-neutral-700">
                                        Michael Jordan
                                    </TableCell>
                                    <TableCell className="capitalize">{product.reason}</TableCell>
                                    <TableCell className="text-sm text-neutral-700">
                                        <span
                                            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700`}
                                        > {product.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="flex items-center gap-2">
                                        <Check
                                            onClick={() => approveProduct(product._id)}
                                            size={'35px'} className="p-2 bg-[#ecf7e6] text-green-700 rounded-md border border-green-700" />
                                        <X
                                            onClick={() => rejectProduct(product._id)}
                                            size={'35px'} className="p-2 bg-[#ffe6e6] text-red-700 rounded-md border border-red-700" />
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/return/${product._id}`}>
                                            <ChevronRight />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </div>

            {/* Mobile view */}
            <div className="md:hidden px-4">
                <div className="divide-y">
                    {returnItems.map((product, idx) => (
                        <div key={idx} className="py-4">
                            <div className="flex items-start gap-4">
                                <Checkbox className="mt-2" />
                                <div className="flex-1">
                                    <div className="mb-2">
                                        <span className="text-sm text-neutral-700 capitalize block">
                                            Order Id: {product._id}
                                        </span>
                                        <span className="text-sm text-neutral-500">
                                            Date: {product.createdAt}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Customer Id:</span>
                                            <span className="text-neutral-700">{product.id}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Sales Representative:</span>
                                            <span className="text-neutral-700">Michael Jordan</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Reason:</span>
                                            <span className="text-neutral-700">{product.reason}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Status:</span>
                                            <span
                                                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700`}
                                            > {product.status}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-4">
                                                <Check
                                                    onClick={() => approveProduct(product._id)}
                                                    size={'35px'} className="p-2 bg-[#ecf7e6] text-green-700 rounded-md border border-green-700" />
                                                <X
                                                    onClick={() => rejectProduct(product._id)}
                                                    size={'35px'} className="p-2 bg-[#ffe6e6] text-red-700 rounded-md border border-red-700" />
                                            </div>
                                            <TableCell>
                                                <Link to={`/return/${product._id}`}>
                                                    <ChevronRight />
                                                </Link>
                                            </TableCell>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}