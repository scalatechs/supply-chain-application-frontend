import { StatsCard } from "@/components/dashboard/stats-cards"
import { Button } from "@/components/ui/button"
import CustomerOrders from "../components/customers/customers-orders"
import AddCustomer from "../components/customers/add-customer"
import { useEffect, useRef, useState } from "react"

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

    return (
        <div className='w-full space-y-8'>

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
                    value="239" icon={''}
                    trend={{ value: 1.30, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Active Customers"
                    value="94%"
                    icon={''}
                    trend={{ value: 0.82, isPositive: true }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Average Retention"
                    value="89%"
                    icon={''}
                    trend={{ value: 1.79, isPositive: false }}
                    comparison="Last week"
                />
                <StatsCard
                    title="Return and Refunds"
                    value="12"
                    icon={''}
                    trend={{ value: 0.27, isPositive: false }}
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