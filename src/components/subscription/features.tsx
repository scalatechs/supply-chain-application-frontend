import { Check } from "lucide-react";

const features = () => {

    const featuresData = [
        "Unlimited Access",
        "Advanced Progress Tracking",
        "Exclusive Access to New Features",
        "Priority Support",
        "Downloadable Resources",
        "Full Flexibility",
        "Customer Management",
        "Secure Payment"
    ];


    return (
        <div className="w-full">
            <h3 className="font-medium md:text-2xl text-base">
                Features
            </h3>

            <div className="flex items-start gap-20">
                <div className="md:flex hidden flex-col items-start gap-4 mt-6">
                    {featuresData.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-medium md:text-base text-sm">
                            <Check size={'15px'} color="green" />
                            {item}
                        </div>
                    ))}
                </div>

                <div className="md:hidden flex flex-col items-start gap-4 mt-6">
                    {featuresData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-medium md:text-base text-sm">
                            <Check size={'15px'} color="green" />
                            {item}
                        </div>
                    ))}
                </div>

                <div className="md:flex hidden flex-col items-start gap-4 mt-6">
                    {featuresData.slice(4, 8).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-medium md:text-base text-sm">
                            <Check size={'15px'} color="green" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default features