import { useState } from "react";
import axios from "axios";
import { Switch } from "../ui/switch";

const NotificationsSettings = () => {
    const [order, setOrder] = useState(true);
    const [stock, setStock] = useState(false);
    const [restockRemainder, setRestockRemainder] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [message, setMessage] = useState("");

    const handleSaveChanges = async () => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.patch(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/setting/setting/notification-update",
                {
                    order,
                    stock,
                    restock_remainder: restockRemainder,
                    emailNotifications,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response.data)
            // Handle success response
            setMessage("Notification settings updated successfully!");
        } catch (error: any) {
            // Handle error response
            setMessage(error.response?.data?.message || "An error occurred.");
        }
    };

    return (
        <div className="flex flex-col items-start gap-4 border p-6 rounded-lg w-full">
            <h1 className="font-medium text-xl">Notification Settings</h1>

            {message && (
                <p
                    className={`${message.includes("updated") ? "text-green-600" : "text-red-600"
                        } text-sm`}
                >
                    {message}
                </p>
            )}

            {/* Order Confirmation */}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Order Confirmation</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for order confirmation from your sales team.
                    </p>
                </div>
                <Switch checked={order} onCheckedChange={setOrder} />
            </div>

            {/* Stock Notifications */}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Stock Notifications</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications for stock updates from your sales team.
                    </p>
                </div>
                <Switch checked={stock} onCheckedChange={setStock} />
            </div>

            {/* Restock Remainder */}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Restock Remainder</h4>
                    <p className="text-neutral-600 text-xs">
                        Get reminders when an item is low on stock.
                    </p>
                </div>
                <Switch checked={restockRemainder} onCheckedChange={setRestockRemainder} />
            </div>

            {/* Email Notifications */}
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                <div className="text-left">
                    <h4 className="md:text-base text-sm font-medium">Email Notifications</h4>
                    <p className="text-neutral-600 text-xs">
                        Get notifications via email from your sales team.
                    </p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full">
                <button
                    onClick={handleSaveChanges}
                    type="button"
                    className="md:w-auto w-full mt-6 px-3 py-4 rounded-lg bg-blue-600 text-white md:text-base text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default NotificationsSettings;
