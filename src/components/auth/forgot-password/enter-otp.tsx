import { Mail } from "lucide-react"
import logo from "../../../assets/Nav-mainlogo.svg"
import { useForgotContext } from "../../../hooks/useForgotContext";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react";
import ProgressBar from "../../auth/forgot-password/progress-bar"
import axios from "axios";

const enterOtp = ({ otp, updateField, data }:
    {
        data: {
            email: string
        },
        otp: string,
        updateField: (data: any) => void
    }) => {

    const { currentStep, setCurrentStep, setIsFormSubmitted } = useForgotContext()
    const [otpValue, setOtpValue] = useState(otp || "");

    const handleOtpChange = (value: string) => {
        // Only allow numeric values
        if (/^\d*$/.test(value)) {
            setOtpValue(value);
            updateField({ otp: value });
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate OTP
        if (!otpValue || otpValue.length !== 4) {
            alert("Please enter a valid 4-digit OTP");
            return;
        }

        const token = localStorage.getItem("token");

        // Create request payload
        const requestData = {
            email: data.email,
            otp: parseInt(otpValue, 10) // Convert string to number with base 10
        };

        console.log("Sending data:", requestData);

        try {
            const response = await axios.post(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/distributor/reset-link",
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"  // Changed from multipart/form-data
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
            console.error("Error verifying OTP:", error);
            alert("Failed to verify OTP. Please try again.");
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-12 md:-mt-48 -mt-24">
            <img src={logo} className="w-64 mb-24" alt="" />

            <div className="shadow-lg p-4 rounded-lg relative">
                <Mail className="size-[40px] text-[#003dff]" />
            </div>

            <div className="text-center">
                <h1 className="text-4xl text-neutral-700 font-semibold">Password Reset</h1>
                <p className="text-sm text-gray-400 text-center mt-1">
                    Enter the otp sent to
                    <span className="text-[#003dff] font-medium"> {data.email}</span>
                </p>
            </div>

            <form onSubmit={handleFormSubmit} className="md:w-[30rem] w-full flex flex-col items-start gap-6">
                {/* OTP */}
                <div className="w-full flex justify-center">
                    <InputOTP
                        maxLength={4}
                        value={otpValue}
                        onChange={handleOtpChange}
                        pattern="\d*"  // Only allow numbers
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                {/* Continue / Resend code */}
                <div className="w-full">
                    <button
                        type="submit"
                        className="bg-[#003dff] text-white font-semibold py-3.5 text-base rounded-lg w-full">
                        Continue
                    </button>
                    <p className="text-sm text-gray-400 text-center mt-2">
                        Didn't receive the code? <span className="text-[#003dff] font-medium">Resend Code</span>
                    </p>
                </div>
            </form>
            <ProgressBar />
        </div>
    )
}

export default enterOtp