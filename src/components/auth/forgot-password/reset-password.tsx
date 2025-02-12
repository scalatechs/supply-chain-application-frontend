import { Lock, Mail } from "lucide-react"
import logo from "../../../assets/Nav-mainlogo.svg"
import { useForgotContext } from "../../../hooks/useForgotContext";
import ProgressBar from "../../auth/forgot-password/progress-bar"
import axios from "axios";

const resetPassword = ({ email, updateField }: { email: string, updateField: (data: any) => void }) => {

    const { currentStep, setCurrentStep, setIsFormSubmitted } = useForgotContext()

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        const token = localStorage.getItem("token");

        // Create request payload with email
        const requestData = {
            email: email
        };

        console.log("Sending data:", requestData);

        try {
            const response = await axios.post(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/distributor/forgot-password",
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log("Response:", response.data);

            if (response.data) {
                // Update the submission state
                setIsFormSubmitted(prevState => ({
                    ...prevState,
                    [currentStep]: true
                }));

                // Move to next step
                setCurrentStep(currentStep + 1);
            }
        } catch (error: any) {
            console.error("Error sending reset email:", error);
            alert("Failed to send reset email. Please try again.");
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-12 md:-mt-48 -mt-24">
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

            <form onSubmit={handleFormSubmit} className="md:w-[30rem] w-full flex flex-col items-start gap-6">
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
                            value={email}
                            onChange={(e) => updateField({ email: e.target.value })}
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            className="border-none outline-none w-full"
                            required
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
            <ProgressBar />
        </div>
    )
}

export default resetPassword