import { Ellipsis, PenLine, Store, X } from "lucide-react"
import { Separator } from "../ui/separator"
import OrderHistory from "./order-history"
import { useEffect, useRef, useState } from "react"

const customerDetails = ({
    showPopup,
}: {
    showPopup: boolean,
}) => {

    const orderHistoryRef = useRef<HTMLDivElement>(null);
    const [showOrderHistory, setShowOrderHistory] = useState(false);

    // Hide order-history when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                orderHistoryRef.current &&
                !orderHistoryRef.current.contains(event.target as Node)
            ) {
                setShowOrderHistory(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const customerData = [
        { col1: ["phone number", "email id", "store type", "location", "operating hours", "sales representative", "point of contact", "referred shipping method", "registration date", "registration date", "last interaction date"] },
        { col2: ["+122-12345678", "mikejk@gmail.com", "convenience store", "kathmandu, nepal", "everyday", "ram bahadur", "store manager", "free shipping", "12 oct, 2023", "16 oct, 2024"] }
    ]

    return (
        <div
            onClick={() => setShowOrderHistory(true)}
            className={`bg-white z-50 ${showPopup ? "visible -translate-y-1/2" : "invisible translate-y-full"} transition-all duration-500 fixed top-1/2 left-1/2 transform -translate-x-1/2 lg:w-[35rem] w-[90%] rounded-lg p-6`}>

            {/* Overlay */}
            <div className={`${showOrderHistory ? "visible" : "invisible"} bg-black inset-0 fixed bg-opacity-50 z-40`}></div>

            <div className="w-full" ref={orderHistoryRef}>
                <OrderHistory showOrderHistory={showOrderHistory} />
            </div>

            <div className="flex items-center justify-between w-full">
                <h1 className="md:text-2xl text-base">Customer Details</h1>
                <X size={'20px'} />
            </div>

            <Separator className="my-4" />

            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between">
                <div className="flex items-center gap-4">
                    <Store size={'25px'} />
                    <h3 className="md:text-xl text-base font-medium">John Doe's Retail Store</h3>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-black text-white rounded-lg px-2 py-1 text-sm">
                        <PenLine size={'14px'} />
                        Edit
                    </div>
                    <Ellipsis size={'25px'} />
                </div>
            </div>

            {/* Details */}
            <div className="flex items-start justify-between w-full">
                <ul className="md:text-sm text-xs text-neutral-600 mt-6">
                    {customerData[0].col1?.map((item, idx) => (
                        <li key={idx} className="mt-2 capitalize">{item}</li>
                    ))}
                </ul>

                <ul className="md:text-sm text-xs mt-4 text-right">
                    {customerData[1].col2?.map((item, idx) => (
                        <li key={idx} className="mt-2 first-letter:capitalize">{item}</li>
                    ))}
                </ul>
            </div>

            <Separator className="my-4" />

            <h3 className="w-full text-center font-medium underline md:text-xl text-base text-blue-600">View Customer Order History</h3>
        </div>
    )
}

export default customerDetails