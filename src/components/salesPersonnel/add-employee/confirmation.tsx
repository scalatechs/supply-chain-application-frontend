import { Switch } from "@/components/ui/switch"
import { PencilLine } from "lucide-react"

// Interface for the component props
interface ConfirmationProps {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    password: string;
    confirmPassword: string;
    assignRole: string;
    assignRegion: string;
    takeOrders: boolean;
    collectPayments: boolean;
    trackShipmentPerformance: boolean;
    viewInventory: boolean;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const confirmation = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
    confirmPassword,
    assignRole,
    assignRegion,
    takeOrders,
    collectPayments,
    trackShipmentPerformance,
    viewInventory,
    currentIndex,
    setCurrentIndex,
}: ConfirmationProps) => {

    return (
        <div className="w-full flex flex-col items-end">

            <div className="w-full flex xl:flex-row flex-col xl:items-start items-center justify-between gap-4">
                {/* Basic Information */}
                <div className="flex flex-col items-start gap-4 border p-6 rounded-lg xl:w-3/5 w-full">

                    <div className="relative w-full flex justify-center">
                        <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="w-24 h-24 object-cover rounded-full" alt="" />
                        <PencilLine color="#003dff" size={'35px'} className="bg-white rounded-full shadow-lg p-1.5 absolute bottom-0 left-[52%]" />
                    </div>

                    <div className="flex md:flex-row flex-col items-start gap-6 mt-6 w-full md:text-sm text-xs ">

                        {/* First Name */}
                        <div className="md:w-1/2 w-full">
                            <label
                                htmlFor="firstName"
                                className="font-medium w-full flex justify-start">
                                First Name
                            </label>
                            <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                                <input
                                    value={firstName}
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
                                    value={lastName}
                                    type="text" name="lastName"
                                    placeholder="Shrestha"
                                    className="border-none outline-none w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col items-start gap-6 mt-2 w-full md:text-sm text-xs ">

                        {/* Email */}
                        <div className="md:w-1/2 w-full">
                            <label
                                htmlFor="email"
                                className="font-medium w-full flex justify-start">
                                Email
                            </label>
                            <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                                <input
                                    value={email}
                                    type="email" name="email"
                                    placeholder="sureshhr@gmail.com"
                                    className="border-none outline-none w-full"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="md:w-1/2 w-full flex flex-col items-start">
                            <label htmlFor="phoneNumber" className="font-medium">
                                Phone Number
                            </label>
                            <div className="flex md:flex-row flex-col md:items-end items-start gap-2 w-full">
                                <select className="md:w-auto w-full border border-neutral-400 py-[0.8rem] rounded-sm px-2">
                                    <option value="977">+ 977</option>
                                    <option value="920">+ 920</option>
                                    <option value="100">+ 100</option>
                                </select>
                                <input
                                    value={phoneNumber}
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    className="w-full mt-1 rounded-sm p-3 border border-neutral-400 outline-none"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex md:flex-row flex-col md:items-end items-start gap-1 mt-2 md:text-sm text-xs ">

                        {/* Address */}
                        <div className="md:w-[72%] w-full">
                            <label htmlFor="address" className="text-sm font-medium w-full flex justify-start">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                value={address}
                                type="text"
                                placeholder="John Doe, 456 Elm Street, Suite 3, Los Angeles"
                                className="w-full mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none"
                                required
                            />
                        </div>
                        <button
                            className="md:w-[calc(100%-72%)] w-full px-3 py-3.5 text-blue-600 border border-blue-600 rounded-md font-medium"
                        >
                            Change Address
                        </button>
                    </div>

                    <div className="flex md:flex-row flex-col items-start gap-6 mt-2 w-full md:text-sm text-xs">

                        {/* Password */}
                        <div className="md:w-1/2 w-full">
                            <label
                                htmlFor="password"
                                className="font-medium w-full flex justify-start">
                                Password
                            </label>
                            <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                                <input
                                    value={password}
                                    type="password" name="password"
                                    placeholder="***********"
                                    className="border-none outline-none w-full"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="md:w-1/2 w-full">
                            <label
                                htmlFor="confirmPassword"
                                className="font-medium w-full flex justify-start">
                                Confirm Password
                            </label>
                            <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-3 py-3 border border-neutral-400 outline-none" >
                                <input
                                    value={confirmPassword}
                                    type="password" name="confirmPassword"
                                    placeholder="***********"
                                    className="border-none outline-none w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Roles Responsibilities */}
                <div className="flex flex-col items-start gap-6 border p-6 rounded-lg xl:w-2/5 w-full">

                    {/* Assign Role */}
                    <div className="w-full md:text-sm text-xs">
                        <label
                            htmlFor="assignRole"
                            className="font-medium w-full flex justify-start">
                            Assign Role
                        </label>
                        <div className="w-full flex items-center gap-2 mt-1 rounded-sm p-3 border border-neutral-400 outline-none" >
                            <input
                                value={assignRole}
                                type="text" name="assignRole"
                                placeholder="Assign Role"
                                className="border-none outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* Assign Region */}
                    <div className="w-full flex md:flex-row flex-col md:items-end items-start gap-1 mt-2 md:text-sm text-xs">

                        <div className="md:w-[60%] w-full">
                            <label
                                htmlFor="assignRegion"
                                className="font-medium w-full flex justify-start">
                                Assign Region
                            </label>
                            <div className="w-full flex items-center gap-2 mt-1 rounded-sm p-3 border border-neutral-400 outline-none" >
                                <input
                                    id="assignRegion"
                                    value={assignRegion}
                                    type="text"
                                    name="assignRegion"
                                    placeholder="John Doe, 456 Elm Street, Suite 3, Los Angeles"
                                    className="border-none outline-none w-full"
                                />
                            </div>
                        </div>

                        <button className="md:w-[calc(100%-60%)] w-full px-3 py-[0.9rem] text-[#003dff] border border-[#003dff] rounded-md font-medium text-sm">
                            Change Address
                        </button>
                    </div>

                    <div className="w-full flex flex-col items-start gap-1 mt-2">
                        <h3 className="font-medium md:text-sm text-xs">Assign Permissions</h3>
                        <div className="border rounded-lg p-4 flex flex-col items-start gap-4 w-full">

                            {/* Take Orders */}
                            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                                <div className="text-left">
                                    <h4 className="md:text-base text-sm font-medium">Take Orders</h4>
                                    <p className="text-neutral-600 text-xs">
                                        Set permissions for employees to take orders
                                    </p>
                                </div>
                                <Switch checked={takeOrders} aria-readonly />
                            </div>

                            {/* Collect Payments*/}
                            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                                <div className="text-left">
                                    <h4 className="md:text-base text-sm font-medium">Collect Payments</h4>
                                    <p className="text-neutral-600 text-xs">
                                        Allow user to collect payments
                                    </p>
                                </div>
                                <Switch checked={collectPayments} aria-readonly />
                            </div>

                            {/* Track Shipment Performance */}
                            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                                <div className="text-left">
                                    <h4 className="md:text-base text-sm font-medium">Track Shipment Performance</h4>
                                    <p className="text-neutral-600 text-xs">
                                        Allow user to track shipment performance
                                    </p>
                                </div>
                                <Switch checked={trackShipmentPerformance} aria-readonly />
                            </div>

                            {/* View Inventory */}
                            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between w-full">
                                <div className="text-left">
                                    <h4 className="md:text-base text-sm font-medium">View Inventory</h4>
                                    <p className="text-neutral-600 text-xs">
                                        Allow user to view inventory items
                                    </p>
                                </div>
                                <Switch checked={viewInventory} aria-readonly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setCurrentIndex(currentIndex + 1)}
                className="md:w-auto w-full mt-6 px-3 py-4 rounded-lg bg-[#003dff] text-white md:text-base text-sm font-medium">
                Create Account
            </button>
        </div>
    )
}

export default confirmation