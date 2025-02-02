import { ArrowUpRight, CircleHelp } from "lucide-react"
import SubscriptionCard from "../components/subscription/subscription-card"
import { useState } from "react";
import Features from "../components/subscription/features"
import Popup from "@/components/subscription/popup";
import CurrentPlan from "@/components/subscription/current-plan";

const Subscription = () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showCurrentPlan, setShowCurrentPlan] = useState(false);

    return (
        <div className="flex flex-col items-start gap-12 w-full">

            {/* Overlay */}
            <div className={`${showPopup ? "visible" : "invisible"} bg-black inset-0 fixed bg-opacity-50 z-40`}></div>

            {
                showCurrentPlan ?
                    <>
                        <CurrentPlan showCurrentPlan={showCurrentPlan} setShowCurrentPlan={setShowCurrentPlan} />
                    </>
                    :

                    <>
                        <h3 className="flex items-center gap-2 font-medium md:text-2xl text-base">
                            Supply chain Pro
                            <CircleHelp color="gray" />
                        </h3>
                        <p className="-mt-11 md:text-base text-sm text-neutral-600">
                            Choose the subscription option that suits your business
                        </p>

                        {/* Subscription Cards */}
                        <div className="w-full flex md:flex-row flex-col items-start gap-4">
                            <SubscriptionCard
                                subscriptionType="monthly"
                                price={4000}
                                discountType="free 15-day trial"
                                isActive={activeCard === "monthly"}
                                onClick={() => setActiveCard(activeCard === "monthly" ? null : "monthly")}
                            />
                            <SubscriptionCard
                                subscriptionType="quarterly"
                                price={14000}
                                discountType="save 12 %"
                                isActive={activeCard === "quarterly"}
                                onClick={() => setActiveCard(activeCard === "quarterly" ? null : "quarterly")}
                            />
                            <SubscriptionCard
                                subscriptionType="annual"
                                price={34000}
                                discountType="save 35 %"
                                isActive={activeCard === "annual"}
                                onClick={() => setActiveCard(activeCard === "annual" ? null : "annual")}
                            />
                        </div>

                        {/* Overview */}
                        <h3 className="font-medium md:text-2xl text-base">
                            Overview
                        </h3>
                        <p className="-mt-10 md:text-base text-sm text-neutral-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minus ex laudantium a minima ducimus porro atque necessitatibus, iste repudiandae magnam, cupiditate repellat. Exercitationem quibusdam vel voluptatum natus optio, eius ipsam dolore quam eaque temporibus nulla laboriosam eveniet necessitatibus molestiae dicta harum doloribus, aliquam ea assumenda ut perspiciatis? Suscipit impedit sequi odio nisi maiores porro vitae atque tenetur dolorem nihil voluptatem animi illo explicabo voluptates nemo, soluta recusandae molestiae est deleniti quasi amet. Dolor, eius.
                        </p>
                        <div className="-mt-6 flex items-center gap-2 text-blue-700 w-full text-xs">
                            Learn More
                            <ArrowUpRight size={'15px'} />
                        </div>

                        {/* Features */}
                        <Features />

                        <div
                            onClick={() => setShowPopup(true)}
                            className="w-full flex justify-end">
                            <button className="bg-[#003dff] p-4 text-white font-medium rounded-lg">
                                Start Subscription
                            </button>
                        </div>

                    </>
            }

            {/* Popup */}
            {showPopup && <Popup showCurrentPlan={showCurrentPlan} setShowCurrentPlan={setShowCurrentPlan} showPopup={showPopup} setShowPopup={setShowPopup} />}
        </div >
    )
}

export default Subscription