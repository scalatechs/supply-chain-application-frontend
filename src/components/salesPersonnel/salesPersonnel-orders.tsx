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
import { Link } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
import CalendarComponent from "@/components/ui/calendar"
import { SalespersonContext } from "@/context/salesperson-context"

export default function SalesPersonnelOrders() {
    const { salesperson } = useContext(SalespersonContext);
    const [showCalendar, setShowCalendar] = useState(false)
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        // Hide calendar when clicking outside
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
            <div className="hidden md:block">
                <ScrollArea className="w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="font-semibold">
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Stores</TableHead>
                                <TableHead>Assigned Area</TableHead>
                                <TableHead>Performance</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {salesperson.map((person) => (
                                <TableRow key={person._id}>
                                    <TableCell className="flex items-center gap-4 capitalize">
                                        <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="w-12 h-12 rounded-full object-cover" alt="" />
                                        <span>{person.firstname} {person.lastname}</span>
                                    </TableCell>
                                    <TableCell className="underline text-blue-600">
                                        {person.email}
                                    </TableCell>
                                    <TableCell>
                                        {person.phone}
                                    </TableCell>
                                    <TableCell className="text-neutral-700">
                                        24
                                    </TableCell>
                                    <TableCell className="text-neutral-700">
                                        Ason, Kathmandu
                                    </TableCell>
                                    <TableCell className="text-neutral-700">
                                        <span
                                            className="inline-flex rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                                            Average
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/sales/user/${person._id}`} className="underline text-blue-500">Manage</Link>
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
                    {salesperson.map((person) => (
                        <div key={person._id} className="py-4">
                            <div className="flex items-start gap-4">
                                <Checkbox className="mt-2" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" alt="" className="w-12 h-12 object-cover rounded-full" />
                                        <div>
                                            <span className="text-neutral-700 capitalize block">
                                                {person.firstname} {person.lastname}
                                            </span>
                                            <span className="text-sm text-blue-700 underline">
                                                {person.email}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Contact:</span>
                                            <span className="text-neutral-700">{person.phone}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Stores:</span>
                                            <span className="text-neutral-700">24</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Assigned Area:</span>
                                            <span className="text-neutral-700">Ason, Kathmandu</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Performance:</span>
                                            <span
                                                className="inline-flex rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                                                Average
                                            </span>
                                        </div>
                                        <div className="flex justify-end mt-2">
                                            <Link to={`/sales/user/${person._id}`} className="underline text-blue-500">Manage</Link>
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