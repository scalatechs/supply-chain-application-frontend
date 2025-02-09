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
import { Calendar, Filter, MoreHorizontal, Search, Upload } from 'lucide-react'
import { useContext, useEffect, useRef, useState } from "react"
import { InventoryContext } from "@/context/inventory-context.tsx"
import { Link } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
import CalendarComponent from "@/components/ui/calendar"

export function InventoryOrders() {
    const { inventory }: any = useContext(InventoryContext);
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
                <div className="flex items-center border-b border-gray-300 min-w-max">
                    <button className="text-blue-600 font-medium border-b-2 border-blue-600 px-4 py-2 whitespace-nowrap md:text-sm text-xs">
                        All
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        High Stock
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Low Stock
                    </button>
                    <button className="text-gray-500 font-medium px-4 py-2 hover:text-gray-700 whitespace-nowrap md:text-sm text-xs">
                        Out of Stock
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
                                <TableHead>FKU</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Stock</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {inventory.map((product) => ( map here */}
                            <TableRow key={inventory._id}>
                                <TableCell className="flex items-center gap-2 h-16">
                                    <Checkbox /><span className="mt-1">{inventory[0]?.FKU}</span>
                                </TableCell>
                                <TableCell>
                                    <img
                                        src="https://imgs.search.brave.com/a1DEPzWpLNS3iL88WJpYSslTjxthyhl5_oqEp0WmCRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGhvbmVwbGFjZWtl/bnlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMS9S/ZWRtaS1Ob3RlLTE0/LVByby00Ry0xLmpw/Zw"
                                        alt="" className="w-12 h-12 rounded-lg inline-flex mr-4 object-contain" />
                                    <span className="md:text-lg text-sm text-neutral-700 capitalize">{inventory[0]?.product_name}</span>
                                </TableCell>
                                <TableCell className="text-lg text-neutral-700 capitalize">{inventory[0]?.categoryName}</TableCell>
                                <TableCell className="text-lg text-neutral-700">Rs 400</TableCell>
                                <TableCell className="text-lg text-neutral-700">{inventory[0]?.total_stock}</TableCell>
                                <TableCell>
                                    <Link to={`/inventory/restock-product/${inventory[0]?._id}`} className="underline text-blue-500">View details</Link>
                                </TableCell>
                            </TableRow>
                            {/* ))} end map here  */}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </div>

            {/* Mobile view */}
            <div className="md:hidden px-4">
                <div className="divide-y">
                    {/* {inventory.map((product) => ( map here */}
                    <div key={inventory._id} className="py-4">
                        <div className="flex items-start gap-4">
                            <Checkbox className="mt-2" />
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <img
                                        src="https://imgs.search.brave.com/a1DEPzWpLNS3iL88WJpYSslTjxthyhl5_oqEp0WmCRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGhvbmVwbGFjZWtl/bnlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMS9S/ZWRtaS1Ob3RlLTE0/LVByby00Ry0xLmpw/Zw"
                                        alt="" className="w-12 h-12 rounded-lg object-contain" />
                                    <div>
                                        <span className="text-lg text-neutral-700 capitalize block">{inventory[0]?.product_name}</span>
                                        <span className="text-sm text-neutral-500">FKU: {inventory[0]?.FKU}</span>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Category:</span>
                                        <span className="text-neutral-700 capitalize">{inventory[0]?.categoryName}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Price:</span>
                                        <span className="text-neutral-700">Rs 400</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Stock:</span>
                                        <span className="text-neutral-700">{inventory[0]?.total_stock}</span>
                                    </div>
                                    <div className="flex justify-end mt-2">
                                        <Link to={`/inventory/restock-product/${inventory[0]?._id}`} className="underline text-blue-500">
                                            View details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ))} end map here  */}
                </div>
            </div>
        </div >
    )
}