import { Switch } from "../ui/switch"

const notificationsSettings = () => {
    return (
        <div className="flex flex-col items-start gap-4 border p-6 rounded-lg w-full">

            <h1 className="font-medium text-xl">Notification Settings</h1>


            {/* Order Confirmation */}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Order Confirmation</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for order confirmation from your sales team.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>

            {/* Order Delayed*/}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Order Delayed</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for order delayed from your sales team.
                    </p>
                </div>
                <Switch />
            </div>

            {/* Ordered Delivered*/}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Ordered Delivered</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for ordered delivered from your sales team.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>

            {/* Email Notifications */}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Email Notifications</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for email notifications from your sales team.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className="md:w-auto w-full mt-6 px-3 py-4 rounded-lg bg-blue-600 text-white md:text-base text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default notificationsSettings