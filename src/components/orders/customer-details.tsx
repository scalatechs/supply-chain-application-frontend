import { ArrowRight, Mail, MapPin, Newspaper, Phone, Store, User } from "lucide-react"
import { Separator } from "../ui/separator"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const customerDetails = () => {
    const { id } = useParams();
    const [person, setPerson] = useState<any | []>([])
    const token = localStorage.getItem("token")

    const fetchPersonDetails = async () => {
        try {
            const response = await axios.get(`https://supply-chain-application-backend-1.onrender.com/api/v1/order/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            setPerson(response.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchPersonDetails()
    }, [])

    return (
        <div className="flex flex-col items-start gap-6 border xl:w-1/3 w-full p-4 rounded-lg">
            <h1 className="text-2xl font-medium">
                Customer Information
            </h1>

            {/* Person Information */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <img src={person[0]?.customerDetails?.customerpic} className="w-12 h-12 rounded-full object-cover" alt="" />
                    <h3 className="text-base capitalize">
                        {person[0]?.customerDetails?.customerName}
                    </h3>
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
                    {person[0]?.customerDetails?.phone}
                </h3>
                <h3 className="mt-4 flex items-center gap-3">
                    <Mail className="text-blue-700" size={'17px'} />
                    {person[0]?.customerDetails?.email}
                </h3>
            </div>

            <Separator />

            {/* Shipping Address */}
            <div className="text-sm">
                <h1 className="font-medium text-base">Shipping Address </h1>
                <h3 className="mt-4 flex items-center gap-3 capitalize">
                    <User className="text-blue-700" size={'17px'} />
                    {person[0]?.shippingDetails?.fullName}
                </h3>
                <h3 className="mt-4 flex items-center gap-3 capitalize">
                    <Store className="text-blue-700" size={'17px'} />
                    {person[0]?.customerDetails?.storeName}
                </h3>
                <h3 className="mt-4 flex items-center gap-3 capitalize">
                    <MapPin className="text-blue-700" size={'17px'} />
                    {person[0]?.customerDetails?.address}
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