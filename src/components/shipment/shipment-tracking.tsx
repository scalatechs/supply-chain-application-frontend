import { Check, Circle, CircleCheck, Ellipsis, MapPin, Triangle, Truck } from "lucide-react"


const shipmentTracking = () => {
    return (
        <div className="flex xl:flex-row flex-col items-start gap-4">

            {/* Order Details */}
            <div className="xl:w-1/2 w-full flex flex-col items-start gap-4">

                {/* Order Description */}
                <div className="w-full border p-4 rounded-lg">
                    <h1 className="font-medium md:text-base text-sm mb-4">Order Details</h1>
                    <div className="w-full flex items-start justify-between">
                        <ul className="flex flex-col gap-3 md:text-sm text-xs text-neutral-600">
                            <li>Order ID</li>
                            <li>Customer Name</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                        <ul className="flex flex-col text-right gap-3 md:text-sm text-xs">
                            <li>12345678</li>
                            <li>John Doe</li>
                            <li>+122-9293292922</li>
                            <li>johndoe@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Shipping Details */}
                <div className="w-full border p-4 rounded-lg">
                    <h1 className="font-medium md:text-base text-sm mb-4">Shipping Details</h1>
                    <div className="w-full flex items-center justify-between bg-[#cceed0] text-green-700 md:text-base text-sm font-medium px-6 py-3">
                        <div className="flex items-center gap-2">
                            <CircleCheck />
                            <h3>Estimated Order Delivery</h3>
                        </div>
                        <h3>September 24th, 2024</h3>
                    </div>

                    <div className="w-full mt-6 flex items-center justify-between">
                        <div>
                            <h4 className="md:text-base text-sm mb-1">From</h4>
                            <p className="md:text-sm text-xs text-neutral-600">Location</p>
                        </div>
                        {/* Arrow */}
                        <h3 className="flex items-center">
                            <span>------------------</span>
                            <Triangle size={'7px'} className="fill-black rotate-90" />
                        </h3>
                        <div>
                            <h4 className="md:text-base text-sm mb-1">To</h4>
                            <p className="md:text-sm text-xs text-neutral-600">Location</p>
                        </div>
                    </div>
                </div>

                {/* Shipper Details */}
                <div className="w-full border p-4 rounded-lg">
                    <h1 className="font-medium md:text-base text-sm mb-4">Shipper Details</h1>
                    <div className="w-full flex items-start justify-between">
                        <ul className="flex flex-col gap-3 md:text-sm text-xs text-neutral-600">
                            <li>Shipment ID</li>
                            <li>Shipper Name</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                        <ul className="flex flex-col text-right gap-3 md:text-sm text-xs">
                            <li>12345678</li>
                            <li>Mike Johnson</li>
                            <li>+122-9293292922</li>
                            <li>mikej212@gmail.com</li>
                        </ul>
                    </div>

                    {/* Truck Details */}
                    <div className="flex flex-col items-start gap-6 w-full">
                        <div className="w-full flex items-center justify-between mt-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-red-500 p-2.5 rounded-full text-white">
                                    <Truck size={'24px'} />
                                </div>
                                <div>
                                    <h3 className="md:text-base text-sm font-medium">Freighliner Cascadia</h3>
                                    <p className="md:text-sm text-xs text-neutral-400">Truck - 4F299LX2</p>
                                </div>
                            </div>
                            <Ellipsis size={'35px'} className="border p-2 rounded-lg" />
                        </div>

                        {/* Shipment Detail */}
                        <div className="w-full flex flex-col items-start gap-2">

                            {/* In Transit */}
                            <div className="flex items-start justify-between w-full">
                                <div className="flex items-start gap-4">
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Circle color="red" fill="red" size={'17px'} />
                                        <div className="h-6 w-[2px] rounded-lg bg-red-500"></div>
                                    </div>
                                    <div>
                                        <h6 className="md:text-sm text-xs font-medium">In Transit</h6>
                                        <p className="text-neutral-400 text-xs">Location of the transit.</p>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="md:text-sm text-xs font-medium">10 Sept, 2024</h6>
                                    <p className="text-neutral-400 text-xs">7:00 AM</p>
                                </div>
                            </div>

                            {/* Delivery */}
                            <div className="flex items-start justify-between w-full">
                                <div className="flex items-start gap-4">
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Circle color="red" fill="red" size={'17px'} />
                                        <div className="h-6 w-[4px] rounded-lg border-l-2 border-[#6e6e6e] border-dashed"></div>
                                    </div>
                                    <div>
                                        <h6 className="md:text-sm text-xs font-medium">Delivery</h6>
                                        <p className="text-neutral-400 text-xs">Location of the delivery starts.</p>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="md:text-sm text-xs font-medium">10 Sept, 2024</h6>
                                    <p className="text-neutral-400 text-xs">7:00 AM</p>
                                </div>
                            </div>

                            {/* Order Delivered */}
                            <div className="flex items-start justify-between w-full">
                                <div className="flex items-start gap-4">
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Circle color="#6e6e6e" fill="#6e6e6e" size={'17px'} />
                                    </div>
                                    <div>
                                        <h6 className="md:text-sm text-xs font-medium">Order Delivered</h6>
                                        <p className="text-neutral-400 text-xs">Location of the delivery address.</p>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="md:text-sm text-xs font-medium">--- --- ---</h6>
                                    <p className="text-neutral-400 text-xs">-- : --</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="xl:w-1/2 w-full flex flex-col items-start gap-4 p-4">

                <div className="w-full flex md:flex-nowrap flex-wrap items-center justify-between gap-2">
                    <div className="p-2 rounded-full bg-red-500 text-white"><MapPin size={'15px'} /></div>
                    <span className="text-neutral-800 md:text-sm text-xs">In Transit</span>
                    <div className="bg-red-500 h-1 w-32 rounded-full"></div>
                    <div className="p-2 rounded-full bg-red-500 text-white"><Truck size={'15px'} /></div>
                    <span className="text-neutral-800 md:text-sm text-xs">Delivery</span>
                    <div className="h-1 w-32 border-t-2 border-t-[#6e6e6e] border-dashed rounded-full"></div>
                    <div className="p-1 rounded-full border border-[#6e6e6e] text-black"><Check size={'15px'} /></div>
                    <span className="text-neutral-800 md:text-sm text-xs">Ordered Delivered</span>
                </div>

                <div className="mt-4 w-full">
                    <div className="w-full mb-4 flex items-start justify-between">
                        <h1 className="text-lg font-medium">Map Overview</h1>
                        <Ellipsis size={'35px'} className="border p-2 rounded-lg" />
                    </div>
                    <iframe className="w-full lg:h-[43rem] h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002833404!2d-74.14431185232479!3d40.69728463480584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1738143591538!5m2!1sen!2snp" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    )
}

export default shipmentTracking