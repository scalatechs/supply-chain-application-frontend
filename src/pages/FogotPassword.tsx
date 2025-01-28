import ResetPassword from "../components/auth/forgot-password/reset-password"
import ForgotSidebar from "@/components/auth/forgot-password/forgot-sidebar"
import EnterOTP from "@/components/auth/forgot-password/enter-otp"
import SetNewPassword from "@/components/auth/forgot-password/set-new-password"
import ResetSuccess from "@/components/auth/forgot-password/reset-success"
import { useEffect } from "react"
import { useForgotContext } from "@/context/forgot-context"
import ProgressBar from "../components/auth/forgot-password/progress-bar"

const forgotPassword = () => {

    const { currentStep, setCurrentStep } = useForgotContext();

    useEffect(() => {
        setCurrentStep(1) //initially set form to step 1
    }, [])

    return (
        <div className="w-full h-screen flex items-center">

            <div className="w-1/3 h-full">
                <ForgotSidebar />
            </div>

            <div className="w-2/3 flex items-center justify-center">
                <div className="lg:w-1/2 w-full">
                    {
                        currentStep == 1 ? <ResetPassword /> :
                            currentStep == 2 ? <EnterOTP /> :
                                currentStep == 3 ? <SetNewPassword /> :
                                    currentStep == 4 ? <ResetSuccess /> : <ResetPassword />
                    }
                </div>
            </div>

            <ProgressBar />
        </div>
    )
}

export default forgotPassword