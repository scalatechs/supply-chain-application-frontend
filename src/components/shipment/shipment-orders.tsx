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
import { SetStateAction, useContext } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShipmentContext } from "@/context/shipment-context"

export default function ShipmentOrders({ setActive }: { setActive: React.Dispatch<SetStateAction<string>> }) {
    const { shipment }: any = useContext(ShipmentContext);

    return (
        <div className="rounded-lg bg-white w-full">
            {/* Responsive search and actions */}
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4 pb-4 pt-12">
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
                                <TableHead>Shipping Id</TableHead>
                                <TableHead>Dispatched Date</TableHead>
                                <TableHead>Shipping Method</TableHead>
                                <TableHead>Fee</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {shipment.map((product) => ( add mapping here */}
                            <TableRow key={shipment.id}>
                                <TableCell className="flex items-center gap-2 h-16">
                                    <Checkbox /><span className="mt-1 text-sm">{shipment.orderId}</span>
                                </TableCell>
                                <TableCell className="text-sm text-neutral-700">
                                    {shipment.distributorId}
                                </TableCell>
                                <TableCell>
                                    {new Date().toLocaleDateString()}
                                </TableCell>
                                <TableCell className="text-sm text-neutral-700">
                                    {shipment.shippingMethod}
                                </TableCell>
                                <TableCell className="text-sm text-neutral-700">
                                    Rs. {shipment.shippingcost}
                                </TableCell>
                                <TableCell className="text-sm text-neutral-700">
                                    <span
                                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${shipment.shippingcost > 100
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {shipment.price > 100 ? "Shipping" : "In-delivery"}
                                    </span>
                                </TableCell>
                                <TableCell
                                    onClick={() => setActive("tracking")}
                                    className="underline text-blue-500">
                                    Track Shipment
                                </TableCell>
                            </TableRow>
                            {/* ))} end mapping here  */}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </div>

            {/* Mobile view */}
            <div className="md:hidden px-4">
                <div className="divide-y">
                    {/* add mapping here */}
                    <div key={shipment.id} className="py-4">
                        <div className="flex items-start gap-4">
                            <Checkbox className="mt-2" />
                            <div className="flex-1">
                                <div className="mb-2">
                                    <span className="text-sm text-neutral-700 capitalize block">
                                        Order Id: {shipment.orderId}
                                    </span>
                                    <span className="text-sm text-neutral-500">
                                        Shipping Id: {shipment.orderId}
                                    </span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Dispatched date:</span>
                                        <span className="text-neutral-700">
                                            {new Date().toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Shipping Method:</span>
                                        <span className="text-neutral-700">{shipment.shippingMethod}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Fee:</span>
                                        <span className="text-neutral-700">Rs. {shipment.shippingcost}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Status:</span>
                                        <span
                                            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${shipment.shippingcost > 100
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {shipment.shippingcost > 100 ? "Shipping" : "In-delivery"}
                                        </span>
                                    </div>
                                    <div
                                        onClick={() => setActive("tracking")}
                                        className="flex justify-end mt-2 underline text-blue-500">
                                        Track Shipment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ))} end mapping here  */}
                </div>
            </div>
        </div >
    )
}