import { Link, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import ProductDelivery from "./product-delivery"
import ProductDescription from "./product-description"
import { ChevronLeft } from "lucide-react"
import { useContext } from "react"
import { InventoryContext } from "@/context/inventory-context"

const EditProduct = () => {
    const { id } = useParams();
    const { inventory } = useContext(InventoryContext);
    const product = inventory.find(item => item.id === id);

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="flex flex-col items-start gap-6 w-full">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl font-medium">Add Product</h1>
                <Link to={`/inventory/restock-product/${product.id}`} className="flex items-center gap-2">
                    <Button variant="outline">
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </Button>
                </Link>
            </div>
            <div className="w-full flex items-start justify-between gap-4">

                {/* Product Details  */}
                <ProductDescription
                    id={product.id} description={product.description} name={product.name} category={product.category} stock={product.stock} />

                {/* Product Images  */}
                <ProductDelivery image={product.image} />
            </div>
        </div>
    )
}

export default EditProduct