import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import ProductDelivery from "./product-delivery"
import ProductDescription from "./product-description"
import { ChevronLeft } from "lucide-react"

const AddProduct = () => {
    return (
        <div className="flex flex-col items-start gap-6 w-full">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl font-medium">Add Product</h1>
                <Link to="/inventory" className="flex items-center gap-2">
                    <Button variant="outline">
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </Button>
                </Link>
            </div>
            <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-4">

                {/* Product Details  */}
                <ProductDescription />

                {/* Product Images  */}
                <ProductDelivery />
            </div>
        </div>
    )
}

export default AddProduct