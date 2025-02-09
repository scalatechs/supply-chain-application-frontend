import { ArrowRight, Mail, MapPin, Newspaper, Phone, Store, User } from "lucide-react"
import { Separator } from "../ui/separator"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const customerDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<any | []>([]);

    const token = localStorage.getItem("token");
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://supply-chain-application-backend-1.onrender.com/api/v1/refund/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            setProduct(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div className="flex flex-col items-start gap-6 border xl:w-1/3 w-full p-4 rounded-lg">
            <h1 className="text-2xl font-medium">
                Customer Information
            </h1>

            {/* Person Information */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="w-12 h-12 rounded-full object-cover" alt="" />
                    <h3 className="text-base capitalize">{product[0]?.customerInfo?.customerName}</h3>
                </div>
                <ArrowRight size={'17px'} />
            </div>

            <Separator />

            {/* Order History */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <div className="bg-blue-200 p-2 rounded-full">
                        <Newspaper size={'24px'} className="text-blue-800" />
                    </div>
                    <h3 className="text-base">Order History</h3>
                </div>
                <ArrowRight size={'17px'} />
            </div>

            <Separator />

            {/* Contact Information */}
            <div className="text-sm">
                <h1 className="font-medium text-base">Contact Information</h1>
                <h3 className="mt-4 flex items-center gap-3">
                    <Phone className="text-blue-700" size={'17px'} />
                    +{product[0]?.customerInfo?.phone}
                </h3>
                <h3 className="mt-4 flex items-center gap-3">
                    <Mail className="text-blue-700" size={'17px'} />
                    {product[0]?.customerInfo?.email}
                </h3>
            </div>

            <Separator />

            {/* Shipping Address */}
            <div className="text-sm">
                <h1 className="font-medium text-base">Shipping Address </h1>
                <h3 className="mt-4 flex items-center gap-3">
                    <User className="text-blue-700" size={'17px'} />
                    John Doe
                </h3>
                <h3 className="mt-4 flex items-center gap-3">
                    <Store className="text-blue-700" size={'17px'} />
                    John Doe's Retail Store
                </h3>
                <h3 className="mt-4 flex items-center gap-3">
                    <MapPin className="text-blue-700" size={'17px'} />
                    123 Main Street, Kathmandu, Nepal
                </h3>
                <h4 className="underline text-blue-700 mt-2">View Map</h4>
            </div>

            <Separator />

            {/* Billing Address */}
            <div className="text-sm">
                <h1 className="font-medium text-base">Billing Address</h1>
                <h3 className="mt-4">Same as shipping address</h3>
            </div>
        </div>
    )
}

export default customerDetails