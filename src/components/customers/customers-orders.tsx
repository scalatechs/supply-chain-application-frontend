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
import { Calendar, Filter, MoreHorizontal, Search, Store, Upload } from 'lucide-react'
import { useEffect, useRef, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import CalendarComponent from "@/components/ui/calendar"
import CustomerDetails from "../customers/customer-details"
import axios from "axios"

export default function SalesPersonnelOrders() {
    const [showCalendar, setShowCalendar] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const token = localStorage.getItem("token");

    const [customers, setCustomers] = useState<any | []>([]);
    const fetchCustomers = async () => {
        try {
            const response = await axios.get(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/customer",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setCustomers(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`,);
        }
    };

    // Hide calendar/popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node)
            ) {
                setShowCalendar(false);
            }

            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                setShowPopup(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        fetchCustomers();
    }, [])


    const [customerId, setCustomerId] = useState("")

    //show popup
    const displayPopup = (id: string) => {
        setCustomerId(id)
        setShowPopup(true)
    }

    return (
        <div className="rounded-lg bg-white w-full">

            {/* Overlay */}
            <div className={`${showCalendar || showPopup ? "visible" : "invisible"} bg-black inset-0 fixed bg-opacity-50 z-40`}></div>

            {/* Customer Details */}
            <div className="w-full" ref={popupRef}>
                <CustomerDetails _id={customerId} showPopup={showPopup} />
            </div>

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
            <div className="w-full md:block hidden">
                <ScrollArea className="w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="font-semibold">
                                <TableHead>Store Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer: any) => (
                                <TableRow key={customer?._id}>
                                    <TableCell className="flex items-center gap-4">
                                        <Store size={'30px'} />
                                        <span className="capitalize">{customer?.storeName}</span>
                                    </TableCell>
                                    <TableCell className="underline text-blue-600">
                                        {customer?.email}
                                    </TableCell>
                                    <TableCell>
                                        {customer?.phone}
                                    </TableCell>
                                    <TableCell className="capitalize text-neutral-700">
                                        {customer?.address}
                                    </TableCell>
                                    <TableCell
                                        onClick={() => displayPopup(customer?._id)}
                                        className="underline text-blue-500 cursor-pointer">
                                        View Details
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
                    {customers.map((customer: any) => (
                        <div key={customer._id} className="py-4">
                            <div className="flex items-start gap-4">
                                <Checkbox className="mt-2" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Store className="w-7 h-7" />
                                        <span className="text-neutral-700 capitalize block">
                                            {customer?.storeName}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Email: </span>
                                            <span className="text-neutral-700">
                                                {customer?.email}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Contact: </span>
                                            <span className="text-neutral-700">
                                                {customer?.phone}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Address: </span>
                                            <span className="text-neutral-700">
                                                {customer?.address}
                                            </span>
                                        </div>
                                        <div
                                            onClick={() => displayPopup(customer?._id)}
                                            className="flex justify-end mt-2 underline text-blue-500">
                                            View details
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