import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useSignupContext } from "../../../hooks/useSignupContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const verification = ({ updateField, data }: {
    updateField: (data: any) => void,
    data: {
        email: string,
        otp: number
    }
}) => {
    const { currentStep, setIsFormSubmitted } = useSignupContext()
    const [otpValue, setOtpValue] = useState("");
    const navigate = useNavigate();

    const handleOtpChange = async (value: string) => {
        setOtpValue(value)
    }

    const token = localStorage.getItem("token")

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        updateField({ otp: otpValue })
        setIsFormSubmitted(prevState => {
            const newState = {
                ...prevState,
                [currentStep]: true
            }
            return newState;
        })

        console.log(data.email, otpValue)

        const response = await axios.post(
            "https://supply-chain-application-backend-1.onrender.com/api/v1/distributor/verify-otp",
            {
                email: data.email,
                otp: parseInt(otpValue)
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );

        if (response.status == 200 || response.status == 201) {
            alert("Logged in successfully")
            navigate('/dashboard');
        } else {
            alert("Wrong otp")
        }

    }


    return (
        <form onSubmit={handleFormSubmit}>
            <h1 className="md:text-5xl text-3xl font-semibold">Verify Phone Number</h1>
            <p className="md:text-base text-sm text-gray-600 mt-4 mb-12">
                We've sent you a verification number in your email address. Please enter the verification
                number.
            </p>

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

            {/* Create account / resend code */}
            <div className="w-full mt-12">
                <button className="bg-[#003dff] text-white font-semibold py-4 text-xl rounded-lg w-full">
                    Create Account
                </button>

                <button
                    onClick={() => alert("Code sent successfully!")}
                    className="border border-[#003dff] text-[#003dff] font-semibold py-4 text-xl rounded-lg w-full mt-4">
                    Resend Code
                </button>
            </div>
        </form>
    )
}

export default verification;