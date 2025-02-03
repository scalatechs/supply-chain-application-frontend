import { ScanEye } from "lucide-react"
import bgImage from "../../../assets/bank-card-mobile-phone-online-payment-b 1.png"
import { Link } from "react-router-dom"

const accountCreated = () => {

    return (
        <div className="flex flex-col items-center gap-6">

            <h1 className="md:text-4xl text-2xl font-medium">
                Account Created <span className="text-[#003dff] font-semibold">Successfully!</span>
            </h1>
            <p className="md:text-base text-sm text-neutral-600 md:mt-2 -mt-4">
                It has survived not only five centuries, but also leap into electronic typesetting,
                remaining essentially unchanged.
            </p>

            <div className="flex md:flex-row flex-col items-center justify-center md:gap-4 w-full">
                <button className="md:w-auto w-full">
                    <Link to={'/sales'} className="flex items-center md:justify-start justify-center gap-3 mt-6 px-3 py-4 rounded-lg border border-[#003dff] text-[#003dff] md:text-base text-sm font-medium wf">
                        <ScanEye className="md:size-[20px] size-[15px]" />
                        Account Details
                    </Link>
                </button>
                <button
                    className="mt-6 px-3 py-4 md:w-auto w-full rounded-lg bg-[#003dff] text-white md:text-base text-sm font-medium">
                    +&nbsp; New Employee
                </button>
            </div >

            <img src={bgImage} className="w-full md:h-[35rem] object-cover" alt="" />
        </div >
    )
}

export default accountCreated