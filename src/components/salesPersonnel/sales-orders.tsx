import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Calendar, Filter, MoreHorizontal, Search, Upload } from 'lucide-react'
import { useContext } from "react"
import { InventoryContext } from "@/context/inventory-context.tsx"
import { Link } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function SalesOrders() {
    const { inventory } = useContext(InventoryContext);

    return (
        <div className="rounded-lg bg-white w-full">

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
                                <TableHead>Order Date</TableHead>
                                <TableHead>Store Location</TableHead>
                                <TableHead>Revenue</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Receipt</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inventory.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="flex items-center gap-2">
                                        {product.id}
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        {new Date().toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        John Doe's Retail Store
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        $ 1,000
                                    </TableCell>
                                    <TableCell className="text-lg text-neutral-700">
                                        <span
                                            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${product.price > 100
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {product.price > 100 ? "Shipping" : "Delivered"}
                                        </span>
                                    </TableCell>
                                    <TableCell className="underline text-blue-500">
                                        <Link to={`/orders/order/${product.id}`}>View details</Link>
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
                                <div className="flex-1">
                                    <div className="mb-2">
                                        <span className="text-lg text-neutral-700 capitalize block">
                                            Order Id: {product.id}
                                        </span>
                                        <span className="text-sm text-neutral-500">
                                            Order Date: {new Date().toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Store Location:</span>
                                            <span className="text-neutral-700">John Doe's Retail Store</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Revenue:</span>
                                            <span className="text-neutral-700">$ {product.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Status:</span>
                                            <span
                                                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${product.price > 100
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                            >
                                                {product.price > 100 ? "Shipping" : "Delivered"}
                                            </span>
                                        </div>
                                        <div className="flex justify-end mt-2 underline text-blue-500">
                                            <Link to={`/orders/order/${product.id}`}>View details</Link>
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