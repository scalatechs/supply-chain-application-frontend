import { ScanEye } from "lucide-react"
import bgImage from "../../../assets/bank-card-mobile-phone-online-payment-b 1.png"
import { Link } from "react-router-dom"

const accountCreated = () => {

    return (
        <div className="flex flex-col items-center gap-6">

            <h1 className="text-4xl font-medium">
                Account Created <span className="text-[#003dff] font-semibold">Successfully!</span>
            </h1>
            <p className="md:text-base text-sm text-neutral-600 mt-2">
                It has survived not only five centuries, but also leap into electronic typesetting,
                remaining essentially unchanged.
            </p>

            <div className="flex items-center gap-4">
                <button>
                    <Link to={'/sales'} className="flex items-center gap-3 mt-6 px-3 py-4 rounded-lg border border-[#003dff] text-[#003dff] text-base font-medium">
                        <ScanEye />
                        Account Details
                    </Link>
                </button>
                <button
                    className="mt-6 px-3 py-4 rounded-lg bg-[#003dff] text-white text-base font-medium">
                    + New Employee
                </button>
            </div >

            <img src={bgImage} alt="" />
        </div >
    )
}

export default accountCreated