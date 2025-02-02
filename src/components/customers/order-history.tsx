import { useContext } from "react";
import { Button } from "../ui/button";
import { Filter, MoreHorizontal, Upload, X } from "lucide-react";
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from "../ui/table";
import { InventoryContext } from "@/context/inventory-context";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";


const orderHistory = ({
    showOrderHistory,
}: {
    showOrderHistory: boolean;
}) => {

    const { inventory } = useContext(InventoryContext)
    return (
        <div className={`lg:w-[72rem] w-[90%] p-6 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white ${showOrderHistory ? "visible -translate-y-1/2" : "invisible translate-y-full"} transition-all duration-500 z-[60]`}>

            <div className="w-full flex md:flex-row flex-col items-start md:gap-0 gap-4 justify-between">
                <h1 className="md:text-2xl text-base font-medium">Order History for John Doe</h1>
                <div className="flex flex-wrap md:items-center items-start gap-2 w-full sm:w-auto">
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
                    <Button variant={"ghost"} size={"sm"}>
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <Separator className="my-6" />

            {/* Tables */}
            <div className="w-full">
                <Table>
                    <TableHeader>
                        <TableRow className="font-semibold">
                            <TableHead>Order Id</TableHead>
                            <TableHead>Order</TableHead>
                            <TableHead>Order Date</TableHead>
                            <TableHead>Payment</TableHead>
                            <TableHead>Delivery Fee</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {inventory.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="flex items-center gap-2 h-16">
                                    <Checkbox /><span className="mt-1">{product.id}</span>
                                </TableCell>
                                <TableCell>
                                    Cosmetics
                                </TableCell>
                                <TableCell className="text-lg text-neutral-700">
                                    {new Date().toLocaleDateString()}
                                </TableCell>
                                <TableCell className="text-lg text-red-700">
                                    Due
                                </TableCell>
                                <TableCell className="text-lg text-neutral-700">
                                    Free Shipping
                                </TableCell>
                                <TableCell className="text-lg text-neutral-700">
                                    <span
                                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${product.price > 100
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {product.price > 100 ? "Shipping" : "In-delivery"}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>


        </div>
    )
}

export default orderHistory