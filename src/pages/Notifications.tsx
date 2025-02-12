import axios from "axios"
import { CheckCheck, RefreshCcwDot, SlidersHorizontal } from "lucide-react"
import { useEffect, useState } from "react"


const Notifications = () => {

    const [notifications, setNotifications] = useState<any | []>([])
    const token = localStorage.getItem("token");

    const fetchNotifications = async () => {
        try {
            const response = await axios
                .get("https://supply-chain-application-backend-1.onrender.com/api/v1/customer-summary",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    });
            setNotifications(response.data.data)
            console.log(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchNotifications()
    }, [])

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

                {notifications?.length == 0 ?

                    <>
                        {notifications.map((item: any, idx: number) => (
                            <div
                                key={idx}
                                className={`${idx == 0 || idx == 1 ? "bg-[#e6ecff]" : ""} border rounded-lg p-6 w-full flex items-start justify-between`} >
                                <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                                    <div className="bg-white shadow-lg rounded-full p-2">
                                        <RefreshCcwDot />
                                    </div>
                                    <div>
                                        <h1 className="md:text-xl text-base font-semibold">{item.title}</h1>
                                        <p className="md:text-sm text-xs text-neutral-600">{item.description}</p>
                                    </div>
                                </div>
                                <h3 className="text-xs text-neutral-600">{item.time}</h3>
                            </div>
                        ))}
                    </>
                    :
                    <h3 className="text-sm text-neutral-600">No notifications yet!</h3>
                }

            </div>
        </div >
    )
}

export default Notifications