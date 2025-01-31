import { CheckCheck, Package, RefreshCcwDot, SlidersHorizontal, TriangleAlert } from "lucide-react"


const Notifications = () => {
    const notifications = [
        {
            icon: <TriangleAlert />,
            title: "Low stock alert!",
            description: "Product: ABC (SKU: 12345) has dropped below the threshold.",
            time: "5 min",
        },
        {
            icon: <Package />,
            title: "Restock Reminder!",
            description: "Product: ABC (SKU: 12345) has dropped below the threshold.",
            time: "35 min",
        },
        {
            icon: <CheckCheck />,
            title: "Order Completed!",
            description: "Product: ABC (SKU: 12345) has dropped below the threshold.",
            time: "1 hr",
        },
        {
            icon: <RefreshCcwDot />,
            title: "Excess Stock!",
            description: "Product: ABC (SKU: 12345) has dropped below the threshold.",
            time: "2 hr",
        },
        {
            icon: <Package />,
            title: "Restock Reminder!",
            description: "Product: ABC (SKU: 12345) has dropped below the threshold.",
            time: "2 hr",
        },
        {
            icon: <RefreshCcwDot />,
            title: "Excess Stock!",
            description: "Product: ABC (SKU: 12345) has dropped below the threshold.",
            time: "3 hr",
        },
    ];

    return (
        <div className="w-full">

            {/* Actions */}
            <div className="w-full flex items-center gap-4 justify-end">
                <div className="border p-2 rounded-lg text-neutral-600 text-base">
                    <SlidersHorizontal size={'17px'} className="inline mr-2" />
                    <span>Filter</span>
                </div>
                <div className="border p-2 rounded-lg text-neutral-600 text-base">
                    <CheckCheck size={'17px'} className="inline mr-2" />
                    <span>Mark As Read</span>
                </div>
            </div>

            {/* Notifcations */}
            <div className="flex flex-col items-start gap-4 w-full mt-6">

                {notifications.map((item, idx) => (
                    <div
                        key={idx}
                        className={`${idx == 0 || idx == 1 ? "bg-[#e6ecff]" : ""} border rounded-lg p-6 w-full flex items-start justify-between`} >
                        <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                            <div className="bg-white shadow-lg rounded-full p-2">
                                {item.icon}
                            </div>
                            <div>
                                <h1 className="md:text-xl text-base font-semibold">{item.title}</h1>
                                <p className="md:text-sm text-xs text-neutral-600">{item.description}</p>
                            </div>
                        </div>
                        <h3 className="text-xs text-neutral-600">{item.time}</h3>
                    </div>
                ))}

            </div>
        </div >
    )
}

export default Notifications