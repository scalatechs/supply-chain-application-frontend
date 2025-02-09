import { ImagePlusIcon } from "lucide-react"
import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const ProductDelivery = ({ image }: { image?: string }) => {
    const { id } = useParams();
    const [product, setProduct] = useState<any | []>([])

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://supply-chain-application-backend-1.onrender.com/api/v1/product/${id}`)
            setProduct(response.data.data[0])
            console.log(response.data.data[0])
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="w-full xl:w-1/2 flex flex-col gap-6">
            <div className="w-full">
                <h2 className="text-xl mb-2">Product Images</h2>
                <div className="border rounded-lg p-4 w-full flex flex-col md:flex-row items-start justify-between gap-6">
                    {image ? (
                        <div className="md:w-1/3 w-full rounded-lg relative md:h-56 h-32">
                            <img src={image} className="w-full h-full object-cover brightness-50 rounded-lg" alt="" />
                            <Button className="absolute md:top-20 top-5 md:left-20 left-24" variant={"outline"}>Replace</Button>
                            <Button className="absolute md:top-32 top-16 md:left-20 left-24" variant={"outline"}>Remove</Button>
                        </div>
                    ) : (
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
                    )}
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
                                    value={product.product_weight}
                                    placeholder="Enter product weight" className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
                                <Select>
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
                                <input
                                    value={product.price}
                                    placeholder="Enter product price" className="w-full outline-none text-sm p-2 border border-zinc-200 rounded-lg" />
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
                                    value={product.length}
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
                                    value={product.breadth}
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
                                    value={product.width}
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
                        <input className="outline-none border-none text-sm px-2 py-2.5" placeholder="Enter variant name" />
                        <button className="text-sm text-blue-600">+ Add Variant</button>
                    </div>
                </div>
            </div>

            <div onClick={() => alert("Product added succesfully!")} className="w-full flex justify-end">
                <button className=" px-3 py-2 bg-[#003dff] font-medium rounded-lg    text-base text-white">Save Product</button>
            </div>
        </div>
    )
}

export default ProductDelivery
