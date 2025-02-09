import { Link, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import ProductDelivery from "./product-delivery"
import ProductDescription from "./product-description"
import { ChevronLeft } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"

const EditProduct = () => {
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
        <div className="flex flex-col items-start gap-6 w-full">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl font-medium">Add Product</h1>
                <Link to={`/inventory/restock-product/${product._id}`} className="flex items-center gap-2">
                    <Button variant="outline">
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </Button>
                </Link>
            </div>
            <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-4">

                {/* Product Details  */}
                <ProductDescription
                    id={product._id}
                    description={product.description}
                    name={product.product_name}
                    category={product.category}
                    stock={product.total_stock} />

                {/* Product Images  */}
                <ProductDelivery
                    image={product.image} />
            </div>
        </div>
    )
}

export default EditProduct