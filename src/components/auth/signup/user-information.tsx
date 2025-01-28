import { useSignupContext } from "@/context/signup-context";
import { ChevronRight } from "lucide-react";

const userInformation = () => {
    const { currentStep, setCurrentStep, setIsFormSubmitted, handleFormData } = useSignupContext();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Get all the form elements
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        // Check if any of the required fields are empty
        const requiredFields = [
            formData.get("phoneNumber"),
            formData.get("email"),
            formData.get("userName"),
            formData.get("password"),
            formData.get("confirmPassword")
        ];

        // Check if any field is empty
        const isFormValid = requiredFields.every(field => field && field !== "");

        if (isFormValid) {
            // Update the submission state
            handleFormData(requiredFields)
            setIsFormSubmitted(prevState => {
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
            <h1 className="text-5xl font-semibold">User Information</h1>
            <p className="text-base text-gray-600 mt-4 mb-12">Please fill out the user information form. Make sure all the details and information are absolutely true.</p>

            <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-start gap-6">
                {/* Phone Number */}
                <div className="w-full flex items-end gap-2">
                    <div className="w-1/2">
                        <label htmlFor="phoneNumber" className="text-base font-medium">
                            Phone Number
                        </label>
                        <input
                            required
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                        />
                    </div>
                    <input
                        required
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="w-1/2 mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                    />
                </div>

                {/* Phone Number w/ country code */}
                <div className="w-full">
                    <label htmlFor="phoneNumber" className="text-base font-medium">
                        Phone Number
                    </label>
                    <div className="flex items-end gap-2">
                        <select className="border border-neutral-400 py-[0.8rem] rounded-lg px-2">
                            <option value="977">+ 977</option>
                            <option value="920">+ 920</option>
                            <option value="100">+ 100</option>
                        </select>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="w-full">
                    <label htmlFor="email" className="text-base font-medium">
                        Email Address
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                    />
                </div>

                {/* User Name */}
                <div className="w-full">
                    <label htmlFor="userName" className="text-base font-medium">
                        User Name
                    </label>
                    <input
                        required
                        type="text"
                        name="userName"
                        placeholder="John Doe"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                    />
                </div>

                {/* Password */}
                <div className="w-full">
                    <label htmlFor="password" className="text-base font-medium">
                        Password
                    </label>
                    <input
                        required
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                    />
                </div>

                {/* Confirm Password */}
                <div className="w-full">
                    <label htmlFor="confirmPassword" className="text-base font-medium">
                        Password
                    </label>
                    <input
                        required
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-Enter Password"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                    />
                </div>

                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#003dff] text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2"
                    >
                        Next Step
                        <ChevronRight />
                    </button>
                </div>
            </form>
        </>
    );
};

export default userInformation;
