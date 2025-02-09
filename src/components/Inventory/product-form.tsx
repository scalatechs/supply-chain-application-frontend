import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useState } from "react";
import { ImagePlusIcon } from "lucide-react"

const productForm = () => {
    const [formData, setFormData] = useState({
        product_name: "",
        category: "",
        product_description: "",
        product_weight: 0,
        length: 0,
        breadth: 0,
        width: 0,
        productimage: "https://imgs.search.brave.com/qynkRPgLBr88v1q13i9vUhhU_LqBEadldHkwI7dlNsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVz/aGNlbnRyYWxncm9j/ZXJ5LmNvbS9jZG4v/c2hvcC9maWxlcy93/YWl3YWkud2VicD92/PTE3MjM4MjMwNjcm/d2lkdGg9MTQ0NQ",
        restock_threshold: 0,
        variants: [
            {
                attributes: {
                    color: "black",
                    size: "6.5 inch"
                },
                variant_price: 999.99,
                stock: 100,
                restock_threshold: 20
            }
        ]
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: isNaN(Number(value)) ? value : Number(value), // Convert to number if applicable
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            category: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        const token = localStorage.getItem("token")
        try {
            const response = await axios.post(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/product",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data)
            alert("Product submitted successfully!");
        } catch (error: any) {
            alert(`Failed to submit product. ${error.message}`);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col xl:flex-row items-start justify-between gap-4">

            {/* Left Side */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6">
                <div className="w-full">
                    <h2 className="text-xl mb-2">Description</h2>
                    <div className="border rounded-lg p-4 w-full flex flex-col items-start gap-6">
                        <div className="w-full">
                            <Label>Product Name</Label>
                            <input
                                name="product_name"
                                placeholder="Enter product name"
                                value={formData.product_name}
                                onChange={handleInputChange}
                                className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                        </div>
                        <div className="w-full">
                            <Label>Product Description</Label>
                            <textarea
                                name="product_description"
                                style={{ resize: 'none' }}
                                placeholder="Enter product description..."
                                value={formData.product_description}
                                onChange={handleInputChange}
                                className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg h-52" />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-xl mb-2">Category</h2>
                    <div className="border rounded-lg p-4 w-full flex flex-col items-start gap-3">
                        <Label>Product Category</Label>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={formData.category || "Select a category"} />
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
                            <input
                                name="restock_threshold"
                                type="number"
                                value={formData.restock_threshold}
                                onChange={handleInputChange}
                                placeholder="Units"
                                className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                        </div>
                        <div className="w-4/5">
                            <Label>FKU</Label>
                            <input
                                name="id"
                                placeholder="Unique ID"
                                className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6">
                <div className="w-full">
                    <h2 className="text-xl mb-2">Product Images</h2>
                    <div className="border rounded-lg p-4 w-full flex flex-col md:flex-row items-start justify-between gap-6">
                        <div
                            onClick={() => document.getElementById("fileInput")?.click()}
                            className="md:w-1/3 w-full rounded-lg border border-blue-600 border-dashed flex flex-col items-center justify-center gap-2 md:h-56 h-32 cursor-pointer">
                            <input
                                id="fileInput"
                                type="file"
                                className="hidden" // Keep the input hidden
                            />
                            <ImagePlusIcon className="w-1/5 h-1/4 text-blue-600 scale-x-[-1]" />
                            <p className="text-center text-sm leading-4 "><span className="underline text-blue-600">Click to upload</span> or <br />drag and drop</p>
                        </div>

                        <div
                            onClick={() => document.getElementById("fileInput")?.click()}
                            className="md:w-1/3 w-full rounded-lg border border-blue-600 border-dashed flex flex-col items-center justify-center gap-2 md:h-56 h-32 cursor-pointer">
                            <input
                                id="fileInput"
                                type="file"
                                className="hidden" // Keep the input hidden
                            />
                            <ImagePlusIcon className="w-1/5 h-1/4 text-blue-600 scale-x-[-1]" />
                            <p className="text-center text-sm leading-4 "><span className="underline text-blue-600">Click to upload</span> or <br />drag and drop</p>
                        </div>
                        <div
                            onClick={() => document.getElementById("fileInput")?.click()}
                            className="md:w-1/3 w-full rounded-lg border border-blue-600 border-dashed flex flex-col items-center justify-center gap-2 md:h-56 h-32 cursor-pointer">
                            <input
                                id="fileInput"
                                type="file"
                                className="hidden" // Keep the input hidden
                            />
                            <ImagePlusIcon className="w-1/5 h-1/4 text-blue-600 scale-x-[-1]" />
                            <p className="text-center text-sm leading-4 "><span className="underline text-blue-600">Click to upload</span> or <br />drag and drop</p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-xl mb-2">Shipping and Delivery</h2>
                    <div className="border rounded-lg p-4 w-full flex flex-col items-start gap-3">
                        <div className="w-full flex md:flex-row flex-col items-start gap-3">
                            <div className="md:w-1/2 w-full">
                                <Label>Product Weight</Label>
                                <div className="w-full flex items-center gap-2">
                                    <input
                                        name="product_weight"
                                        value={formData.product_weight}
                                        onChange={handleInputChange}
                                        placeholder="Enter product weight" className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                                    <Select onValueChange={handleSelectChange}>
                                        <SelectTrigger className="w-1/4">
                                            <SelectValue placeholder="kg" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="lbs">lbs</SelectItem>
                                                <SelectItem value="kg">kg</SelectItem>
                                                <SelectItem value="g">g</SelectItem>
                                                <SelectItem value="oz">oz</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <Label>Price</Label>
                                <div className="w-full flex items-center gap-2">
                                    <input placeholder="Enter product price" className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                                    <Select>
                                        <SelectTrigger className="w-1/4">
                                            <SelectValue placeholder="Rs" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="RS">Rs</SelectItem>
                                                <SelectItem value="USD">USD</SelectItem>
                                                <SelectItem value="EUR">EUR</SelectItem>
                                                <SelectItem value="GBP">GBP</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex xl:flex-row flex-col items-start justify-between gap-2">
                            <div className="xl:w-1/3 w-full">
                                <Label>Length</Label>
                                <div className="w-full flex items-center gap-2">
                                    <input
                                        name="length"
                                        value={formData.length}
                                        onChange={handleInputChange}
                                        placeholder="e.g 5" className="xl:w-2/3 w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                                    <Select>
                                        <SelectTrigger className="xl:w-1/3 w-1/4">
                                            <SelectValue placeholder="in" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="in">in</SelectItem>
                                                <SelectItem value="cm">cm</SelectItem>
                                                <SelectItem value="mm">mm</SelectItem>
                                                <SelectItem value="ft">ft</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="xl:w-1/3 w-full">
                                <Label>Breadh</Label>
                                <div className="w-full flex items-center gap-2">
                                    <input
                                        name="breadth"
                                        value={formData.breadth}
                                        onChange={handleInputChange}
                                        placeholder="e.g 10" className="xl:w-2/3 w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                                    <Select>
                                        <SelectTrigger className="xl:w-1/3 w-1/4">
                                            <SelectValue placeholder="in" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="in">in</SelectItem>
                                                <SelectItem value="cm">cm</SelectItem>
                                                <SelectItem value="mm">mm</SelectItem>
                                                <SelectItem value="ft">ft</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="xl:w-1/3 w-full">
                                <Label>Width</Label>
                                <div className="w-full flex items-center gap-2">
                                    <input
                                        name="width"
                                        value={formData.width}
                                        onChange={handleInputChange}
                                        placeholder="e.g 4" className="xl:w-2/3 w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                                    <Select>
                                        <SelectTrigger className="xl:w-1/3 w-1/4">
                                            <SelectValue placeholder="in" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="in">in</SelectItem>
                                                <SelectItem value="cm">cm</SelectItem>
                                                <SelectItem value="mm">mm</SelectItem>
                                                <SelectItem value="ft">ft</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-xl mb-2">Variant</h2>
                    <div className="border rounded-lg p-4 w-full">
                        <div className="w-full border rounded-lg pr-2 flex items-center justify-between">
                            <input
                                className="outline-none border-none text-sm px-2 py-2.5" placeholder="Enter variant name" />
                            <button className="text-sm text-blue-600">+ Add Variant</button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        className=" px-3 py-2 bg-[#003dff] font-medium rounded-lg text-base text-white">Save Product</button>
                </div>
            </div>
        </form>
    )
}

export default productForm