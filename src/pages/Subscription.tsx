import { ArrowUpRight, CircleHelp } from "lucide-react"
import { useEffect, useState } from "react";
import Features from "../components/subscription/features"
import Popup from "@/components/subscription/popup";
import CurrentPlan from "@/components/subscription/current-plan";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const Subscription = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showCurrentPlan, setShowCurrentPlan] = useState(false);

    type SubscriptionType = 'monthly' | 'quaterly' | 'anually';

    const [selectedPlan, setSelectedPlan] = useState<SubscriptionType>('monthly');

    // Add type for the cardType parameter
    const handlePlanSelect = (plan: SubscriptionType) => {
        setSelectedPlan(plan);
    };


    const [data, setData] = useState<any | []>([]);
    const token = localStorage.getItem("token");

    //fetch data
    const fetchSubscription = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/subscriptionplan/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            setData(response.data.data)
            console.log(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchSubscription()
    }, [])

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

                    <div
                        className="flex flex-col items-start gap-12 w-full">
                        <h3 className="flex items-center gap-2 font-medium md:text-2xl text-base">
                            Supply chain Pro
                            <CircleHelp color="gray" />
                        </h3>
                        <p className="-mt-11 md:text-base text-sm text-neutral-600">
                            Choose the subscription option that suits your business
                        </p>

                        {/* Subscription Cards */}
                        <div className="w-full flex md:flex-row flex-col items-start gap-4">

                            {/* Monthly */}
                            <div
                                onClick={() => handlePlanSelect('monthly')}
                                className={`md:w-1/3 w-full border ${selectedPlan === 'monthly' ? "border-blue-600 bg-blue-50" : ""} p-4 rounded-xl flex flex-col items-start gap-4 cursor-pointer`}
                            >
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={selectedPlan === 'monthly'}
                                        className="rounded-full"
                                    />
                                    <h3 className="md:text-xl text-base font-medium capitalize">{data[0]?.type}</h3>
                                </div>
                                <Separator />
                                <h4 className="md:text-base text-sm font-medium">Rs {data[0]?.price} / mo</h4>
                                <h5 className="md:text-sm text-xs text-neutral-600 -mt-4">
                                    {data[0]?.billingCycle}
                                </h5>
                                <div className="py-1 px-2 first-letter:capitalize rounded-sm bg-blue-200 text-blue-700 text-xs font-medium">
                                    Free {data[0]?.trialdays} days trial
                                </div>
                            </div>

                            {/* Quaterly */}
                            <div
                                onClick={() => handlePlanSelect('quaterly')}
                                className={`md:w-1/3 w-full border ${selectedPlan === 'quaterly' ? "border-blue-600 bg-blue-50" : ""} p-4 rounded-xl flex flex-col items-start gap-4 cursor-pointer`}
                            >
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={selectedPlan === 'quaterly'}
                                        className="rounded-full"
                                    />
                                    <h3 className="md:text-xl text-base font-medium capitalize">{data[1]?.type}</h3>
                                </div>
                                <Separator />
                                <h4 className="md:text-base text-sm font-medium">Rs {data[1]?.price} / mo</h4>
                                <h5 className="md:text-sm text-xs text-neutral-600 -mt-4">
                                    {data[1]?.billingCycle}
                                </h5>
                                <div className="py-1 px-2 first-letter:capitalize rounded-sm bg-blue-200 text-blue-700 text-xs font-medium">
                                    Free {data[1]?.trialdays} days trial
                                </div>
                            </div>

                            {/* Anually */}
                            <div
                                onClick={() => handlePlanSelect('anually')}
                                className={`md:w-1/3 w-full border ${selectedPlan === 'anually' ? "border-blue-600 bg-blue-50" : ""} p-4 rounded-xl flex flex-col items-start gap-4 cursor-pointer`}
                            >
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={selectedPlan === 'anually'}
                                        className="rounded-full"
                                    />
                                    <h3 className="md:text-xl text-base font-medium capitalize">{data[2]?.type}</h3>
                                </div>
                                <Separator />
                                <h4 className="md:text-base text-sm font-medium">Rs {data[2]?.price} / mo</h4>
                                <h5 className="md:text-sm text-xs text-neutral-600 -mt-4">
                                    {data[2]?.billingCycle}
                                </h5>
                                <div className="py-1 px-2 first-letter:capitalize rounded-sm bg-blue-200 text-blue-700 text-xs font-medium">
                                    Free {data[2]?.trialdays} days trial
                                </div>
                            </div>
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

                    </div>
            }

            {/* Popup */}
            {showPopup &&
                <Popup
                    selectedPlan={selectedPlan}
                    showCurrentPlan={showCurrentPlan}
                    setShowCurrentPlan={setShowCurrentPlan}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                />
            }
        </div >
    )
}

export default Subscription