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

const enterOtp = ({ otp, updateField }: { otp: string, updateField: (data: any) => void }) => {

    const { currentStep, setCurrentStep, setIsFormSubmitted } = useForgotContext()
    const [otpValue, setOtpValue] = useState(otp || "");

    const handleOtpChange = (value: string) => {
        setOtpValue(value);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        updateField({ otp: otpValue })
        setIsFormSubmitted(prevState => {
            const newState = {
                ...prevState,
                [currentStep]: true
            };
            return newState;
        });
        setCurrentStep(currentStep + 1);
    };

    return (
        <div className="w-full flex flex-col items-center gap-12 -mt-48">
            <img src={logo} className="w-64 mb-24" alt="" />

            <div className="shadow-lg p-4 rounded-lg relative">
                <Mail className="size-[40px] text-[#003dff]" />
            </div>

            <div className="text-center">
                <h1 className="text-4xl text-neutral-700 font-semibold">Password Reset</h1>
                <p className="text-sm text-gray-400 text-center mt-1">
                    Enter the otp sent to
                    <span className="text-[#003dff] font-medium">johndoe21@gmail.com</span>
                </p>
            </div>

            <form onSubmit={handleFormSubmit} className="w-[30rem] flex flex-col items-start gap-6">

                {/* OTP */}
                <div className="w-full flex justify-center">
                    <InputOTP maxLength={4} onChange={handleOtpChange}>
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
                </ div>

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
        </div>
    )
}

export default enterOtp