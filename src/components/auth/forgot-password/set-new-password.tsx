import { LockIcon } from "lucide-react"
import logo from "../../../assets/Nav-mainlogo.svg"
import { useForgotContext } from "../../../hooks/useForgotContext";
import ProgressBar from "./progress-bar";
import axios from "axios";

const setNewPassword = ({ data, password, confirmPassword, updateField }:
    {
        data: { email: string },
        password: string,
        confirmPassword: string,
        updateField: (data: any) => void
    }) => {

    const { currentStep, setCurrentStep, setIsFormSubmitted } = useForgotContext()

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if all required fields are present
        if (!data.email || !password || !confirmPassword) {
            alert("Please fill out all required fields.");
            return;
        }

        const token = localStorage.getItem("token");

        // Create request payload
        const requestData = {
            email: data.email,
            password: password,
            confirmPassword: confirmPassword
        };

        console.log("Sending data:", requestData);

        try {
            const response = await axios.post(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/distributor/resetPassword",
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
            console.error("Error resetting password:", error);
            alert("Failed to reset password. Please try again.");
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-12 md:-mt-48 -mt-24">
            <img src={logo} className="w-64 mb-24" alt="" />

            <div className="shadow-lg p-4 rounded-lg relative text-[#003dff]">
                <p className="text-2xl font-semibold border-b-[2px] border-[#003dff]">* * *</p>
            </div>

            <div className="text-center">
                <h1 className="text-4xl text-neutral-700 font-semibold">Set new password</h1>
                <p className="text-sm text-gray-400 text-center mt-1">
                    At least 8 characters, one uppercase letter, one number, one special character
                </p>
            </div>

            <form onSubmit={handleFormSubmit} className="md:w-[30rem] w-full flex flex-col items-start gap-6">
                {/* Password  */}
                <div className="w-full">
                    <label
                        htmlFor="password"
                        className="text-base font-medium">
                        New Password
                    </label>
                    <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-4 py-3.5 border border-neutral-400 outline-none" >
                        <LockIcon className="text-neutral-400" />
                        <input
                            onChange={(e) => updateField({ password: e.target.value })}
                            value={password}
                            type="password"
                            name="password"
                            placeholder="Enter new password"
                            className="border-none outline-none w-full"
                            required
                        />
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="w-full">
                    <label
                        htmlFor="confirmPassword"
                        className="text-base font-medium">
                        Confirm Password
                    </label>
                    <div className="w-full flex items-center gap-2 mt-1 rounded-sm px-4 py-3.5 border border-neutral-400 outline-none" >
                        <LockIcon className="text-neutral-400" />
                        <input
                            onChange={(e) => updateField({ confirmPassword: e.target.value })}
                            value={confirmPassword}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className="border-none outline-none w-full"
                            required
                        />
                    </div>
                </div>

                {/* Reset Password Button*/}
                <button
                    type="submit"
                    className="bg-[#003dff] text-white font-semibold py-3.5 text-base rounded-lg w-full">
                    Reset Password
                </button>
            </form>
            <ProgressBar />
        </div>
    )
}

export default setNewPassword