import { Switch } from "../ui/switch"

const notificationsSettings = () => {
    return (
        <div className="flex flex-col items-start gap-4 border p-6 rounded-lg w-full">

            <h1 className="font-medium text-xl">Notification Settings</h1>


            {/* Order Confirmation */}
            <div className="flex items-center justify-between w-full">
                <div className="text-left">
                    <h4 className="text-base font-medium">Order Confirmation</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for order confirmation from your sales team.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>

            {/* Order Delayed*/}
            <div className="flex items-center justify-between w-full">
                <div className="text-left">
                    <h4 className="text-base font-medium">Order Delayed</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for order delayed from your sales team.
                    </p>
                </div>
                <Switch />
            </div>

            {/* Ordered Delivered*/}
            <div className="flex items-center justify-between w-full">
                <div className="text-left">
                    <h4 className="text-base font-medium">Ordered Delivered</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for ordered delivered from your sales team.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>

            {/* Email Notifications */}
            <div className="flex items-center justify-between w-full">
                <div className="text-left">
                    <h4 className="text-base font-medium">Email Notifications</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for email notifications from your sales team.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>
        </div>
    )
}

export default notificationsSettings