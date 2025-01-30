import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import BasicInformation from "../components/settings/basic-information"
import ChangePassword from "../components/settings/change-password"
import NotifcationsSettings from "../components/settings/notifications-settings"

const Settings = () => {
    return (
        <div className="flex flex-col items-start gap-6 w-full">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl font-medium">Edit Profile</h1>
                <Link to="/inventory" className="flex items-center gap-2">
                    <Button variant="outline">
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </Button>
                </Link>
            </div>

            <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-4">

                {/* Basic Information */}
                <BasicInformation />

                <div className="flex flex-col items-start gap-4 xl:w-1/2 w-full">
                    <ChangePassword />
                    <NotifcationsSettings />
                </div>
            </div>
        </div>
    )
}

export default Settings