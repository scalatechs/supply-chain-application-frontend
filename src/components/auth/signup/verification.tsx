import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useSignupContext } from "@/context/signup-context";
import { useNavigate } from "react-router-dom"

const verification = () => {
    const navigate = useNavigate();
    const { currentStep, setIsFormSubmitted } = useSignupContext()
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(prevState => {
            const newState = {
                ...prevState,
                [currentStep]: true
            }
            console.log('Updated form state:', newState);
            return newState;
        })
        navigate('/dashboard')
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1 className="text-5xl font-semibold">Verify Phone Number</h1>
            <p className="text-base text-gray-600 mt-4 mb-12">
                We've sent you a verification number in your email address. Please enter the verification
                number.
            </p>

            {/* OTP */}
            <div className="w-full flex justify-center">
                <InputOTP maxLength={4}>
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

export default verification