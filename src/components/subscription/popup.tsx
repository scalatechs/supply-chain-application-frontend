import { Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import { SetStateAction, useEffect, useRef, useState } from "react";

const Popup = ({
    showPopup,
    setShowPopup,
    showCurrentPlan,
    setShowCurrentPlan
}: {
    showPopup: boolean;
    setShowPopup: React.Dispatch<SetStateAction<boolean>>;
    showCurrentPlan: boolean;
    setShowCurrentPlan: React.Dispatch<SetStateAction<boolean>>;
}) => {
    const [selectedCard, setSelectedCard] = useState<string | null>("visa");
    const popupRef = useRef<HTMLDivElement>(null);

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowPopup]);

    return (
        <div
            ref={popupRef}
            className={`fixed ${showPopup ? "visible -translate-x-1/2" : "invisible translate-x-full"}  top-1/2 left-1/2 transform -translate-y-1/2 bg-white transition-all duration-500 flex flex-col items-start gap-6 border p-6 rounded-xl lg:w-[35rem] w-[90%] z-50`}>

            <div className="w-full flex items-start justify-between">
                <h1 className="font-medium md:text-2xl text-base">Summary</h1>
                <p className="text-xs text-neutral-600">Starts on Feb 1, 2025</p>
            </div>

            <div className="flex items-start justify-between w-full">
                <div className="md:text-sm text-xs text-neutral-600">
                    <h3>Monthly</h3>
                    <h3 className="mt-2">Tax</h3>
                </div>
                <div className="md:text-sm text-xs font-medium text-right">
                    <h3>Rs 4,000.00</h3>
                    <h3 className="mt-2">Rs 0.00</h3>
                </div>
            </div>

            <Separator />

            <div className="flex items-start justify-between w-full md:text-base text-xs">
                <p className="text-neutral-600">Total after trial</p>
                <p className="font-medium">Rs 4,000.00</p>
            </div>

            <Separator />

            {/* Billing Address */}
            <h1 className="font-medium md:text-2xl text-base">Billing Address</h1>

            <div className="flex items-start justify-between gap-4 w-full -mt-2">
                <div className="w-1/2 md:text-lg text-base">
                    <label htmlFor="country" className="text-xs block mb-1">
                        Country
                    </label>
                    <select
                        name="country"
                        className="p-3 border outline-none rounded-lg w-full"
                    >
                        <option value="Nepal">Nepal</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                    </select>
                </div>

                <div className="w-1/2 md:text-lg text-base">
                    <label htmlFor="zipCode" className="text-xs block mb-1">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        name="zipCode"
                        placeholder="Enter Zip Code"
                        className="p-3 w-full rounded-lg border outline-none"
                    />
                </div>
            </div>

            <p className="text-xs text-neutral-800 -mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                minima laboriosam nulla repellendus eos. Dolor nulla, quasi libero
                iure aut provident aspernatur dolores, minima rerum eum voluptate,
                iusto laudantium impedit!
            </p>

            <Separator />

            {/* Payment Method */}
            <div className="w-full flex items-start justify-between">
                <h1 className="font-medium md:text-2xl text-base">Payment Method</h1>
                <div className="text-blue-600 cursor-pointer md:text-base text-sm flex items-center gap-1">
                    <Plus size={"17px"} />
                    Add Card
                </div>
            </div>

            <div
                onClick={() => setSelectedCard("visa")}
                className={`flex items-center justify-between w-full p-6 border rounded-lg ${selectedCard === "visa" ? "bg-blue-50 border-blue-600" : ""
                    } cursor-pointer`}
            >
                <div className="flex items-center gap-4">
                    <Checkbox checked={selectedCard === "visa"} className="rounded-full" />
                    <div>
                        <h3 className="md:text-2xl text-base font-medium">John Doe</h3>
                        <p className="text-neutral-600 md:text-sm text-xs">
                            XXXX-XXXX-XXXX-9902
                        </p>
                    </div>
                </div>
                <img src={visa} className="h-14 w-14 object-contain" alt="" />
            </div>

            <div
                onClick={() => setSelectedCard("mastercard")}
                className={`flex items-center justify-between w-full p-6 border rounded-lg ${selectedCard === "mastercard" ? "bg-blue-50 border-blue-600" : ""
                    } cursor-pointer`}
            >
                <div className="flex items-center gap-4">
                    <Checkbox
                        checked={selectedCard === "mastercard"}
                        className="rounded-full"
                    />
                    <div>
                        <h3 className="md:text-2xl text-base font-medium">John Doe</h3>
                        <p className="text-neutral-600 md:text-sm text-xs">
                            XXXX-XXXX-XXXX-9902
                        </p>
                    </div>
                </div>
                <img src={mastercard} className="h-14 w-14 object-contain" alt="" />
            </div>

            <Separator />

            <button
                onClick={
                    () => {
                        setShowPopup(!showPopup)
                        setShowCurrentPlan(!showCurrentPlan)
                    }
                }
                className="rounded-lg w-full md:p-4 p-2 bg-[#003dff] font-medium text-white md:text-base text-sm">
                Make Payment
            </button>
        </div>
    );
};

export default Popup;
