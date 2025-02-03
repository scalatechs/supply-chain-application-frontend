import { CloudUpload, X } from "lucide-react"
import { SetStateAction } from "react"

const addCustomer = ({
    showAddCustomerPopup,
    setShowAddCustomerPopup
}: {
    showAddCustomerPopup: boolean,
    setShowAddCustomerPopup: React.Dispatch<SetStateAction<boolean>>;
}) => {

    return (
        <div className={`fixed ${showAddCustomerPopup ? "visible -translate-y-1/2" : "invisible translate-y-full"} top-1/2 left-1/2 transform -translate-x-1/2 bg-white transition-all duration-500 border rounded-lg md:p-6 p-3 z-50 lg:w-[50rem] w-[90%]`}>

            <div className="w-full flex items-start justify-between">
                <h1 className="md:text-2xl text-base font-medium">Add New Customer</h1>
                <X
                    className="cursor-pointer"
                    onClick={() => setShowAddCustomerPopup(false)}
                    size={'20px'} />
            </div>

            <div className="w-full rounded-lg flex flex-col items-center md:gap-6 gap-3 mt-6">

                {/* Customer Name and Customer Id */}
                <div className="flex items-start gap-6 w-full md:text-sm text-xs">

                    <div className="md:w-1/2 w-full">
                        <label htmlFor="firstName" className="font-medium w-full flex justify-start">
                            Customer Name
                        </label>
                        <input
                            id="customerName"
                            name="customerName"
                            type="text"
                            placeholder="Type Customer's Name"
                            className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                            required
                        />
                    </div>

                    <div className="md:w-1/2 w-full">
                        <label htmlFor="lastName" className="font-medium w-full flex justify-start">
                            Customer Id
                        </label>
                        <input
                            id="customerId"
                            name="customerId"
                            type="text"
                            placeholder="Give Customer Id"
                            className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Email  and Phone Number */}
                <div className="flex items-start gap-6 w-full md:text-sm text-xs">

                    <div className="md:w-1/2 w-full">
                        <label htmlFor="email" className="font-medium w-full flex justify-start">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter Customer's Email"
                            className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                            required
                        />
                    </div>

                    <div className="md:w-1/2 w-full">
                        <label htmlFor="phoneNumber" className="font-medium w-full flex justify-start">
                            Phone Number
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            placeholder="Enter Customer Contact Number"
                            className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Store Name and Shipping Method */}
                <div className="flex md:flex-row flex-col items-start gap-6 w-full md:text-sm text-xs">

                    <div className="md:w-1/2 w-full">
                        <label htmlFor="storeName" className="font-medium w-full flex justify-start">
                            Store Name
                        </label>
                        <input
                            id="storeName"
                            name="storeName"
                            type="text"
                            placeholder="e.g: John Doe's Retail Store"
                            className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                            required
                        />
                    </div>

                    <div className="md:w-1/2 w-full">
                        <label htmlFor="preferredShippingMethod" className="font-medium w-full flex justify-start">
                            Preferred Shipping Method
                        </label>
                        <input
                            id="preferredShippingMethod"
                            name="preferredShippingMethod"
                            type="text"
                            placeholder="e.g: Express Shipping"
                            className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col items-start gap-1 w-full md:text-sm text-xs">
                    <label htmlFor="description" className="font-medium w-full flex justify-start">
                        Description
                    </label>
                    <textarea style={{ resize: "none" }} className="md:h-52 h-40 border border-zinc-400 rounded-md w-full p-4 outline-none" name="description" placeholder="Customer Description" id="description" />
                </div>

                {/* Drop Files */}
                <div
                    onClick={() => document.getElementById("fileInput")?.click()}
                    className="w-full cursor-pointer border border-[#003dff] border-dashed flex flex-col items-center justify-center rounded-lg px-6 py-9">

                    <input
                        id="fileInput"
                        type="file"
                        className="hidden" // Keep the input hidden
                    />

                    <div className="bg-[#003dff] text-white rounded-lg p-2">
                        <CloudUpload className="md:size-[54px] size-[32px]" />
                    </div>
                    <h3 className="md:text-base text-sm text-neutral-600 mt-4">
                        Drag & drop or&nbsp;
                        <span className="text-[#003dff]">choose file</span>
                        &nbsp;to upload
                    </h3>
                    <p className="md:text-sm text-xs text-neutral-400">
                        supported format jpeg, png
                    </p>
                </div>

                {/* Submit Button */}
                <button className="rounded-lg bg-[#003dff] text-white font-medium md:text-base text-sm p-3">
                    Save Customer Details
                </button>
            </div>
        </div>
    )
}

export default addCustomer