import { Checkbox } from "../ui/checkbox"
import { Separator } from "../ui/separator"

interface SubscriptionCardProps {
    subscriptionType: string;
    price: number;
    discountType: string;
    isActive: boolean;
    onClick: () => void;
}

const subscriptionCard = ({
    subscriptionType,
    price,
    discountType,
    isActive,
    onClick,
}: SubscriptionCardProps) => {

    return (
        <div
            onClick={onClick}
            className={`md:w-1/3 w-full border ${isActive ? "border-blue-600 bg-blue-50" : ""} p-4 rounded-xl flex flex-col items-start gap-4 cursor-pointer`}>
            <div className="flex items-center gap-2">
                <Checkbox checked={isActive} className="rounded-full" />
                <h3 className="md:text-xl text-base font-medium capitalize">{subscriptionType}</h3>
            </div>
            <Separator />
            <h4 className="md:text-base text-sm font-medium">Rs {price.toLocaleString()} / mo</h4>
            <h5 className="md:text-sm text-xs text-neutral-600 -mt-4">Billed {subscriptionType}</h5>
            <div className="py-1 px-2 first-letter:capitalize rounded-sm bg-blue-200 text-blue-700 text-xs font-medium">
                {discountType}
            </div>
        </div>
    )
}

export default subscriptionCard