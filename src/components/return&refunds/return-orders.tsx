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
import { useContext } from "react"
import { InventoryContext } from "@/context/inventory-context.tsx"
import { Link } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ReturnOrders() {
    const { inventory } = useContext(InventoryContext);

    return (
        <div className="rounded-lg bg-white w-full">
            {/* Responsive tabs */}
            <ScrollArea className="w-full">
                <div className="flex items-center border-b border-gray-300 min-w-max">
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
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4 pb-4 pt-12 px-4">
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
                    <Button variant="ghost" size="sm" className="border rounded-lg flex-1 sm:flex-none">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span className="text-sm font-normal">{new Date().toLocaleDateString()}</span>
                    </Button>
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
                            {inventory.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="flex items-center gap-2 h-16">
                                        <Checkbox /><span className="mt-1">{product.id}</span>
                                    </TableCell>
                                    <TableCell>
                                        {new Date().toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        # {product.id}
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        Michael Jordan
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        <span
                                            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${product.price > 100
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {product.price > 100 ? "Approved" : "Pending"}
                                        </span>
                                    </TableCell>
                                    <TableCell className="flex items-center gap-2">
                                        <Check size={'35px'} className="p-2 bg-[#ecf7e6] text-green-700 rounded-md border border-green-700" />
                                        <X size={'35px'} className="p-2 bg-[#ffe6e6] text-red-700 rounded-md border border-red-700" />
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/inventory/restock-product/${product.id}`} className="underline text-blue-500">
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
                    {inventory.map((product) => (
                        <div key={product.id} className="py-4">
                            <div className="flex items-start gap-4">
                                <Checkbox className="mt-2" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-contain" />
                                        <div>
                                            <span className="text-lg text-neutral-700 capitalize block">{product.name}</span>
                                            <span className="text-sm text-neutral-500">ID: {product.id}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Category:</span>
                                            <span className="text-neutral-700">{product.category}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Price:</span>
                                            <span className="text-neutral-700">{product.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Stock:</span>
                                            <span className="text-neutral-700">{product.stock}</span>
                                        </div>
                                        <div className="flex justify-end mt-2">
                                            <Link to={`/inventory/restock-product/${product.id}`} className="underline text-blue-500">
                                                View details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}