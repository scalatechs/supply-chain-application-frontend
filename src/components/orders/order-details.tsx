import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { InventoryContext } from "@/context/inventory-context"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { PencilLine } from "lucide-react";
import { useContext } from "react"

const orderDetails = () => {
    const { inventory } = useContext(InventoryContext);

    return (
        <div className="xl:w-2/3 w-full flex flex-col items-start gap-6">
            <div className="w-full rounded-lg p-4 border">
                <h1 className="text-2xl font-medium flex items-center">
                    Order Items&nbsp;&nbsp;
                    <span className="bg-[#fadbdb] mr-2 text-red-600 py-1 px-4 rounded-lg text-sm">Unfulfilled
                    </span>
                </h1>

                <div className="md:block hidden mt-4">
                    <ScrollArea className="w-full">
                        <Table>
                            <TableHeader>
                                <TableRow className="font-semibold">
                                    <TableHead>Product Description</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Discount</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {inventory.slice(0, 3).map((product, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell className="flex items-start gap-2">
                                            <img src={product.image} className="w-20 h-20 border p-1 rounded-lg mr-4 object-contain" alt="" />
                                            <div className="flex flex-col items-start gap-1">
                                                <h3 className="text-neutral-600 text-xs">{product.category}</h3>
                                                <h1 className="text-base font-medium">{product.name}</h1>
                                                <p className="text-neutral-600 text-[0.65rem]">FKU : {product.id}</p>
                                                <p className="text-neutral-600 text-[0.65rem] -mt-2">Size : 12oz</p>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {product.price}
                                        </TableCell>
                                        <TableCell>
                                            {product.stock}
                                        </TableCell>
                                        <TableCell>
                                            {idx % 2 != 0 && "5%"}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {product.price}
                                        </TableCell>
                                        <TableCell>
                                            <PencilLine color="gray" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </div>
            </div>

            <div className="w-full rounded-lg p-4 border">
                <h1 className="text-2xl font-medium flex items-center">
                    Payment Receipt&nbsp;&nbsp;
                    <h3 className="bg-[#f9ebd2] text-sm text-orange-400 py-1 px-4 rounded-lg">Payment Pending</h3>
                </h1>

                <div className="flex items-start justify-between w-full">
                    <ul className="mt-4 text-neutral-600 font-medium text-sm flex flex-col items-start gap-2">
                        <li>Sub-total</li>
                        <li>Shipping charge</li>
                        <li>Discount</li>
                        <li>Tax</li>
                        <li className="text-base font-medium text-black">Total</li>
                        <li className="mt-4 text-black text-lg">Paid by the customer</li>
                    </ul>

                    <ul className="mt-4 text-sm font-medium flex flex-col items-start gap-2">
                        <li>Rs 13,200.00</li>
                        <li>Rs 35.00</li>
                        <li className="text-green-600">5%</li>
                        <li className="text-red-600">12%</li>
                        <li className="text-base font-medium">Rs 13,000.00</li>
                        <li className="mt-4 text-black text-lg flex items-center gap-2">
                            Rs 0.00
                            <PencilLine size={'17px'} color="gray" />
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default orderDetails