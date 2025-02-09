import { InventoryContext } from '@/context/inventory-context'
import { useContext } from 'react'
import { ScrollArea } from './ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Checkbox } from '@radix-ui/react-checkbox';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const ProductPopup = ({ show }: { show: boolean }) => {
    const { inventory }: any = useContext(InventoryContext);

    return (
        <div className={`fixed inset-0 flex items-center justify-center p-4 z-40 ${show ? 'block' : 'hidden'}`}>
            <div className='bg-white border w-full max-w-4xl max-h-[90vh] flex flex-col rounded-lg p-4 md:p-6 z-50 shadow-lg'>
                <ScrollArea className="w-full flex-grow">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-semibold whitespace-nowrap">FKU</TableHead>
                                    <TableHead className="font-semibold whitespace-nowrap">Product</TableHead>
                                    <TableHead className="font-semibold whitespace-nowrap">Category</TableHead>
                                    <TableHead className="font-semibold whitespace-nowrap">Price</TableHead>
                                    <TableHead className="font-semibold whitespace-nowrap">Stock</TableHead>
                                    <TableHead className="font-semibold whitespace-nowrap">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* {inventory.map((product) => ( */}
                                <TableRow key={inventory._id}>
                                    <TableCell className="flex items-center h-12 md:h-16">
                                        <Checkbox /><span className="ml-2">{inventory._id}</span>
                                    </TableCell>
                                    <TableCell className="min-w-[200px]">
                                        <div className="flex items-center gap-2 md:gap-4">
                                            <img src={inventory.image} alt="" className="w-8 h-8 md:w-12 md:h-12 rounded-lg object-contain" />
                                            <span className="text-sm md:text-lg text-neutral-700 capitalize">{inventory.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm md:text-lg text-neutral-700 whitespace-nowrap">{inventory.category}</TableCell>
                                    <TableCell className="text-sm md:text-lg text-neutral-700 whitespace-nowrap">{inventory.price}</TableCell>
                                    <TableCell className="text-sm md:text-lg text-neutral-700 whitespace-nowrap">{inventory.stock}</TableCell>
                                    <TableCell className="whitespace-nowrap">
                                        <Link to={`/inventory/restock-product/${inventory._id}`} className="text-sm md:text-base underline text-blue-500">View details</Link>
                                    </TableCell>
                                </TableRow>
                                {/* ))} */}
                            </TableBody>
                        </Table>
                    </div>
                </ScrollArea>
                <div className="mt-4 flex justify-center">
                    <Link to="/inventory">
                        <Button variant="outline" className="w-full md:w-auto">View Inventory</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductPopup