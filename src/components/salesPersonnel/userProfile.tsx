import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { ChevronLeft } from "lucide-react"
import UserInformation from "../salesPersonnel/user-information"
import UserSales from "../salesPersonnel/user-sales"
import SalesOrders from "./sales-orders"

const userProfile = () => {
    return (
        <div className="flex flex-col items-start gap-6 w-full">
            <div className="w-full flex items-center justify-between">
                <h1 className="md:text-3xl text-xl font-medium">User Profile</h1>
                <Link to="/sales" className="flex items-center gap-2">
                    <Button variant="outline">
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </Button>
                </Link>
            </div>

            <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-4">
                <UserInformation />
                <UserSales />
            </div>

            <SalesOrders />
        </div>
    )
}

export default userProfile