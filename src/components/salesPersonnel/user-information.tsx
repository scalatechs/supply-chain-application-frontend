import { MapPin, PencilLine } from "lucide-react";
import { useParams } from "react-router-dom";
import { Separator } from "../ui/separator";

const userInformation = () => {
    const { id } = useParams();
    const personalInformation = [
        { title: "full name", value: "john doe" },
        { title: "email", value: "johndoe21@gmail.com" },
        { title: "contact", value: "+977 9820199922" }
    ]

    const professionalInformation = [
        { title: "Job Title", value: "Sales Representative" },
        { title: "Supervisor", value: "Jane Doe" },
        { title: "Store Coverage", value: "21" },
        { title: "Success Rate", value: "87.02%" },
        { title: "Performance", value: "Excellent" },
    ];

    return (
        <div className="xl:w-1/2 w-full flex flex-col items-start gap-4">
            <div className="border w-full p-4 flex flex-col gap-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                        <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="w-16 h-16 rounded-full object-cover" alt="" />
                        <div>
                            <h1 className="font-medium text-2xl">John Doe</h1>
                            <p className="text-neutral-600 text-base"># {id}</p>
                        </div>
                    </div>
                    <div className="border border-blue-600 text-blue-600 px-2 py-1.5 rounded-md">
                        <PencilLine size={'17px'} className="inline mr-2" />
                        <span>Edit</span>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="text-sm mt-4 w-full flex flex-col gap-4">
                    <h1 className="font-medium text-base">Personal Information</h1>
                    <Separator />
                    {personalInformation.map((item, idx) => (
                        <div key={idx} className="w-full flex items-end justify-between">
                            <h3 className="text-neutral-700 capitalize">{item.title}</h3>
                            <h2 className="font-medium capitalize">{item.value}</h2>
                        </div>
                    ))}
                </div>

                {/* Professional Information */}
                <div className="md:text-sm text-xs mt-4 w-full flex flex-col gap-4">
                    <h1 className="font-medium text-base">Professional Information</h1>
                    <Separator />
                    {professionalInformation.map((item, index) => (
                        <div key={index} className="w-full flex items-end justify-between">
                            <h3 className="text-neutral-700 capitalize">{item.title}</h3>
                            <h2 className="font-medium capitalize">{item.value}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border w-full p-4 flex flex-col gap-6">
                <h1 className="font-medium text-base">Assigned Areas</h1>

                {/* Assigned Areas */}
                <div className="bg-zinc-200/50 w-full rounded-lg px-4 py-2.5 flex items-center gap-4">
                    <MapPin size={'17px'} />
                    Civil Mall, Kathmandu, Kranti Path, 44600
                </div>
                <div className="w-full flex items-center gap-4">
                    <div className="bg-zinc-200/50 w-[90%] rounded-lg px-4 py-2.5 flex items-center gap-4">
                        <MapPin size={'17px'} />
                        Add Locaation
                    </div>
                    <button className="w-[10%] bg-[#003dff] text-white px-4 py-2.5 rounded-lg">
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default userInformation;