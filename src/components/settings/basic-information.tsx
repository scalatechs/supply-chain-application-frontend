import { PencilLine } from 'lucide-react'

const basicInformation = () => {
    return (
        <div className="flex flex-col items-start gap-4 border p-6 rounded-lg xl:w-1/2 w-full">
            <h1 className="font-medium text-xl">Basic Information</h1>

            <div className="relative w-full flex justify-center">
                <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="w-24 h-24 object-cover rounded-full" alt="" />
                <PencilLine color="#003dff" size={'35px'} className="bg-white rounded-full shadow-lg p-1.5 absolute bottom-0 left-[52%]" />
            </div>

            <div className="flex md:flex-row flex-col items-start gap-6 mt-6 w-full md:text-sm text-xs">

                {/* First Name */}
                <div className="md:w-1/2 w-full">
                    <label
                        htmlFor="firstName"
                        className="font-medium w-full flex justify-start">
                        First Name
                    </label>
                    <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                        <input
                            type="text" name="firstName"
                            placeholder="Suresh"
                            className="border-none outline-none w-full"
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="md:w-1/2 w-full">
                    <label
                        htmlFor="lastName"
                        className="font-medium w-full flex justify-start">
                        Last Name
                    </label>
                    <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                        <input
                            type="text" name="lastName"
                            placeholder="Shrestha"
                            className="border-none outline-none w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Business Name */}
            <div className="w-full md:text-sm text-xs">
                <label
                    htmlFor="businessName"
                    className="font-medium w-full flex justify-start">
                    Business Name
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                    <input
                        type="text" name="businessName"
                        placeholder="Ram's Retail Store"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>


            {/* Email */}
            <div className="w-full md:text-sm text-xs">
                <label
                    htmlFor="email"
                    className="font-medium w-full flex justify-start">
                    Email Address
                </label>
                <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                    <input
                        type="email" name="email"
                        placeholder="sureshhr@gmail.com"
                        className="border-none outline-none w-full"
                    />
                </div>
            </div>

            <div className="w-full flex md:flex-row flex-col md:items-end items-start gap-1 mt-2 md:text-sm text-xs">

                {/* Address */}
                <div className="md:w-[72%] w-full">
                    <label
                        htmlFor="address"
                        className="font-medium w-full flex justify-start">
                        Address
                    </label>
                    <div className="w-full flex items-center gap-2 mt-1 rounded-sm p-3 border border-neutral-400 outline-none" >
                        <input
                            type="text" name="address"
                            placeholder="John Doe, 456 Elm Street, Suite 3, Los Angeles"
                            className="border-none outline-none"
                        />
                    </div>
                </div>

                <button className="md:w-[calc(100%-72%)] w-full px-3 py-[0.9rem] text-[#003dff] border border-[#003dff] rounded-md font-medium">
                    Change Address
                </button>
            </div>

            {/* Phone Number */}
            <div className="w-full md:text-sm text-xs">
                <label htmlFor="phoneNumber" className="text-sm font-medium w-full flex justify-start">
                    Phone Number
                </label>
                <div className="flex md:flex-row flex-col items-start gap-2 mt-1">
                    <select className="border border-neutral-400 py-3.5 rounded-sm px-2 md:w-[12%] w-full">
                        <option value="977">+977</option>
                        <option value="920">+920</option>
                        <option value="100">+100</option>
                    </select>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                        required
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className="md:w-auto w-full mt-6 px-3 py-4 rounded-lg bg-blue-600 text-white md:text-base text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    Request Changes
                </button>
            </div>
        </div>
    )
}

export default basicInformation