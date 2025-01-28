import { useSignupContext } from "@/context/signup-context";
import { ChevronLeft, ChevronRight, FilePlus2, FileText, X } from "lucide-react";
import { useState } from "react";

const businessDetails = () => {
    const { currentStep, setCurrentStep, setIsFormSubmitted } = useSignupContext()

    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles: any = event.target.files;
        if (selectedFiles) {
            setFiles((prevFiles: any) => [...prevFiles, ...Array.from(selectedFiles)]);
        }
    }

    const handleFileDelete = (fileName: string) => {
        setFiles((prevFiles: any) => prevFiles.filter((file: any) =>
            file.name !== fileName
        ))
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Get all the form elements
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        // Check if any of the required fields are empty
        const requiredFields = [
            formData.get("companyName"),
            formData.get("registrationNumber"),
            formData.get("location"),
        ];

        // Check if any field is empty
        const isFormValid = requiredFields.every(field => field && field !== "");

        if (isFormValid) {
            // Update the submission state
            await setIsFormSubmitted(prevState => {
                const newState = {
                    ...prevState,
                    [currentStep]: true
                };
                console.log('Updated form state:', newState);
                return newState;
            });

            // Move to next step
            setCurrentStep(currentStep + 1);
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <>
            <h1 className="text-5xl font-semibold">Business Details</h1>
            <p className="text-base text-gray-600 mt-4 mb-12">Please fill out the business details form. Make sure all the details and information are absolutely true.</p>

            <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-start gap-6">

                {/* Company Name */}
                <div className="w-full">
                    <label
                        htmlFor="companyName"
                        className="text-base font-medium">
                        Company Name
                    </label>
                    <input
                        type="text" name="companyName"
                        placeholder="Enter company name"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none" />

                </div>

                {/* Registration Number */}
                <div className="w-full">
                    <label
                        htmlFor="registrationNumber"
                        className="text-base font-medium">
                        Registration Number
                    </label>
                    <input
                        type="text" name="registrationNumber"
                        placeholder="Enter registration number"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none" />

                </div>

                {/* Location */}
                <div className="w-full">
                    <label
                        htmlFor="location"
                        className="text-base font-medium">
                        Location
                    </label>
                    <input
                        type="text" name="location"
                        placeholder="Enter location"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none" />

                </div>

                {/* Verification Documents */}
                <div className="w-full">
                    <label
                        htmlFor="location"
                        className="text-base font-medium">
                        Verification Documents
                    </label>
                    <div
                        onChange={handleFileChange}
                        onClick={() => document.getElementById("business-details-file")?.click()}
                        className="mt-1 rounded-lg border border-blue-600 border-dashed flex flex-col items-center justify-center gap-2 md:h-48 h-32 cursor-pointer">
                        <input
                            multiple //allows multiple file uploads
                            id="business-details-file"
                            type="file"
                            className="hidden" // Keep the input hidden
                        />
                        <FilePlus2 className="w-1/5 h-1/4 text-blue-600" />
                        <p className="text-center text-lg text-neutral-600">Drag & drop or <span className="underline text-blue-600">choose file</span> to upload</p>
                    </div>
                    <div className="w-full flex items-start justify-between text-neutral-600 text-[0.8rem] mt-1">
                        <h3>Supported format: pdf</h3>
                        <h3>Maximum size: 25MB</h3>
                    </div>
                </div>

                {/* Uploaded Files */}
                {files.length > 0 &&
                    <div className="w-full">
                        <h1 className="text-neutral-600 font-medium">Uploaded Files</h1>
                        <div className="flex flex-col items-start gap-2">
                            {files.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border border-neutral-400 rounded-lg py-4 px-6 w-full mt-2 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <FileText />
                                        <div>
                                            <h1 className="text-sm font-medium">{item.name}</h1>
                                            <h3 className="text-xs text-neutral-700">
                                                {(item.size / (1024 * 1024)).toFixed(2)} MB
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Delete File */}
                                    <X
                                        onClick={() => handleFileDelete(item.name)}
                                        size={'24px'}
                                        className="bg-zinc-300 hover:bg-zinc-200 p-1 cursor-pointer rounded-full text-neutral-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {/* Navigation Buttons */}
                <div className="w-full flex justify-between mb-6">
                    <div className="border border-neutral-600 text-neutral-600 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2">
                        <ChevronLeft />
                        <button
                            onClick={() => setCurrentStep(currentStep - 1)}
                            type="submit">
                            Previous Step
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#003dff] text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2">
                        Next Step
                        <ChevronRight />
                    </button>
                </div >
            </form >
        </>
    )
}

export default businessDetails;