import { Calendar, Headset, MessageSquareWarning } from "lucide-react"
import CurrentPlanCards from "../subscription/current-plan-cards"
import { SetStateAction } from "react"

const currentPlan = ({
    showCurrentPlan,
    setShowCurrentPlan
}: {
    showCurrentPlan: boolean,
    setShowCurrentPlan: React.Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex items-center gap-2 font-medium rounded-lg p-3 bg-red-100 text-red-600">
                <MessageSquareWarning />
                <span className="font-semibold">Attention: </span>
                Your current subscription will expire in 12 days. Renew your subscription.
            </div>

            <h2 className="md:text-2xl text-base font-medium">Current Plan</h2>
            <div className="flex items-start justify-between w-full">
                <div className="flex items-center gap-2">
                    <Calendar size={'30px'} />
                    <h1 className="md:text-4xl text-2xl">Monthly Package</h1>
                </div>
                <button
                    onClick={() => setShowCurrentPlan(!showCurrentPlan)}
                    className="p-3 rounded-lg text-blue-600 font-medium border border-blue-600 bg-[#e6ecff]">
                    Renew Package
                </button>
            </div>

            {/* Cards */}
            <div className="flex md:flex-wrap flex-nowrap md:flex-row flex-col items-start gap-4 w-full">
                <CurrentPlanCards
                    title="Devices Connected"
                    value="15"
                    description="You have 15 extra devices connected to the application."
                    link="Device Management"
                />
                <CurrentPlanCards
                    title="Renewal Date"
                    value="2025-06-12"
                    description="You can also plan our auto renewal process where renewals are done automatically."
                    link="Plan Renewal"
                />
                <CurrentPlanCards
                    title="Renewal Amount"
                    value="Rs 4,000.00"
                    description="You can save upto 35% on annual renewal plans."
                    link="Plan Renewal"
                />
            </div>

            {/* Questions and Support */}
            <div className="flex lg:flex-row flex-col items-start w-full gap-6">
                <div className="lg:w-1/2 w-full border p-6 rounded-xl flex items-center gap-6 text-[#003dff]">
                    <MessageSquareWarning size={'35px'} />
                    <div>
                        <h3 className="font-semibold md:text-2xl text-base">Questions?</h3>
                        <p className="md:text-sm text-xs text-neutral-600 mt-2 md:w-[85%] w-full">
                            For more information about our policies and standards please&nbsp;
                            <span className="underline text-blue-600">contact here</span>
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full border p-6 rounded-xl flex items-center gap-6 text-[#003dff]">
                    <Headset size={'35px'} />
                    <div>
                        <h3 className="font-semibold md:text-2xl text-base">Support</h3>
                        <p className="md:text-sm text-xs text-neutral-600 mt-2 md:w-[85%] w-full">
                            For more information about our policies and standards please&nbsp;
                            <span className="underline text-blue-600">contact here</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default currentPlan