import { StatsCard } from "@/components/dashboard/stats-cards"
import { Button } from "@/components/ui/button"
import CustomerOrders from "../components/customers/customers-orders"
import AddCustomer from "../components/customers/add-customer"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

const Customers = () => {

    const [showAddCustomerPopup, setShowAddCustomerPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowAddCustomerPopup(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowAddCustomerPopup]);


    const [customerSummary, setCustomerSummary] = useState<any | []>([]);
    const token = localStorage.getItem("token")

    const fetchSummary = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/customer-summary",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
            setCustomerSummary(response.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    const [customers, setCustomers] = useState<any | []>([]);
    const fetchCustomers = async () => {
        try {
            const response = await axios.get(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/customer",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setCustomers(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`,);
        }
    };

    useEffect(() => {
        fetchSummary();
        fetchCustomers()
    }, [])


    return (
        <div className='w-full space-y-8 -mt-9'>

            {/* Overlay */}
            <div className={`${showAddCustomerPopup ? "visible" : "invisible"} bg-black inset-0 fixed bg-opacity-50 z-40`}></div>

            <div className='flex items-center justify-end'>
                <Button
                    onClick={() => setShowAddCustomerPopup(!showAddCustomerPopup)}
                    variant="outline" className='flex items-center gap-2'>
                    +&nbsp; New Customer
                </Button>
            </div>

            <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3">
                <StatsCard
                    title="Total Customers"
                    value={`${customers?.length}`}
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Active Customers"
                    value={`${customerSummary?.activeCustomerPercentage == undefined ? "0" : customerSummary?.activeCustomerPercentage}%`}
                    icon={''}
                    trend={{ value: 0, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Average Retention"
                    value="0%"
                    icon={''}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Return and Refunds"
                    value="0"
                    icon={''}
                    trend={{ value: 0, isPositive: false }}
                    comparison="Last week"
                />
            </div>

            <CustomerOrders />

            <div className="w-full" ref={popupRef}>
                <AddCustomer showAddCustomerPopup={showAddCustomerPopup} setShowAddCustomerPopup={setShowAddCustomerPopup} />
            </div>
        </div>
    )
}

export default Customers