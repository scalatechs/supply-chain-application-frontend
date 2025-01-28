import { Lock, Mail } from "lucide-react"
import logo from "../../../assets/Nav-mainlogo.svg"
import { useForgotContext } from "@/context/forgot-context";


const resetPassword = () => {

    const { currentStep, setCurrentStep, setIsFormSubmitted, setAllFormData } = useForgotContext()

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Get all the form elements
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const formValues: Record<string, string> = {}; // To store the key-value pairs
        formData.forEach((value, key) => {
            formValues[key] = value.toString();
        });

        setAllFormData((prevData) => {
            const updatedData = {
                ...prevData, // Retain previous steps' data
                [currentStep]: formValues, // Add/update current step data
            };
            return updatedData;
        });


        // Check if any of the required fields are empty
        const requiredFields = [
            formData.get("email"),
        ];

        // Check if any field is empty
        const isFormValid = requiredFields.every(field => field && field !== "");

        if (isFormValid) {
            // Update the submission state
            setIsFormSubmitted(prevState => {
                const newState = {
                    ...prevState,
                    [currentStep]: true
                };
                return newState;
            });

            // Move to next step
            setCurrentStep(currentStep + 1);
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-12 -mt-48">
            <img src={logo} className="w-64 mb-24" alt="" />

            <div className="shadow-lg p-4 rounded-lg relative">
                <Lock className="size-[40px] text-[#003dff]" />
            </div>

            <div className="text-center">
                <h1 className="text-4xl text-neutral-700 font-semibold">Forgot Password?</h1>
                <p className="text-sm text-gray-400 text-center mt-1">
                    Enter your registered email to reset your password.
                </p>
            </div>

            <form onSubmit={handleFormSubmit} className="w-[30rem] flex flex-col items-start gap-6">

                {/* Email Address */}
                <div className="w-full">
                    <label
                        htmlFor="email"
                        className="text-base font-medium">
                        Email Address
                    </label>
                    <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-4 py-3.5 border border-neutral-400 outline-none" >
                        <Mail className="text-neutral-400" />
                        <input
                            type="email" name="email"
                            placeholder="Enter email address"
                            className="border-none outline-none w-full"
                        />

                    </div>
                </div>

                {/* Create account / resend code */}
                <div className="w-full">
                    <button
                        type="submit"
                        className="bg-[#003dff] text-white font-semibold py-3.5 text-base rounded-lg w-full">
                        Send Reset Link
                    </button>

                    <button
                        onClick={() => alert("Code sent successfully!")}
                        className="border border-[#003dff] text-[#003dff] font-semibold py-3.5 text-base rounded-lg w-full mt-4">
                        Back to login page
                    </button>
                </div>
            </form>
        </div>
    )
}

export default resetPassword