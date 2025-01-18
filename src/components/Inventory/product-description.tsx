import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ProductDescription = ({ name, category, stock, id, description }: { name?: string, category?: string, stock?: number, id?: string, description?: string }) => {
    return (
        <div className="w-1/2 flex flex-col gap-6">
            <div className="w-full">
                <h2 className="text-xl mb-2">Description</h2>
                <div className="border rounded-lg p-4 w-full flex flex-col items-start gap-6">
                    <div className="w-full">
                        <Label>Product Name</Label>
                        <input placeholder="Enter product name" value={name} className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <Label>Product Description</Label>
                        <textarea style={{ resize: 'none' }} placeholder="Enter product description..."
                            value={description ? description : ''}
                            className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg h-52" />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-xl mb-2">Category</h2>
                <div className="border rounded-lg p-4 w-full flex flex-col items-start gap-3">
                    <Label>Product Category</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={category} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Electronics</SelectLabel>
                                <SelectItem value="smartphones">Smartphones</SelectItem>
                                <SelectItem value="laptops">Laptops</SelectItem>
                                <SelectItem value="tablets">Tablets</SelectItem>
                                <SelectLabel>Clothing</SelectLabel>
                                <SelectItem value="shirts">Shirts</SelectItem>
                                <SelectItem value="pants">Pants</SelectItem>
                                <SelectItem value="dresses">Dresses</SelectItem>
                                <SelectLabel>Home & Kitchen</SelectLabel>
                                <SelectItem value="appliances">Appliances</SelectItem>
                                <SelectItem value="furniture">Furniture</SelectItem>
                                <SelectItem value="kitchenware">Kitchenware</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-xl mb-2">Inventory</h2>
                <div className="border rounded-lg p-4 w-full flex items-start gap-3">
                    <div className="w-1/5">
                        <Label>Quantity</Label>
                        <input placeholder="Units" value={stock} className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                    </div>
                    <div className="w-4/5">
                        <Label>FKU</Label>
                        <input placeholder="Unique ID" value={id} className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription