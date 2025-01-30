import ResetPassword from "../components/auth/forgot-password/reset-password"
import ForgotSidebar from "@/components/auth/forgot-password/forgot-sidebar"
import EnterOTP from "@/components/auth/forgot-password/enter-otp"
import SetNewPassword from "@/components/auth/forgot-password/set-new-password"
import ResetSuccess from "@/components/auth/forgot-password/reset-success"
import { useEffect, useState } from "react"
import { useForgotContext } from "../hooks/useForgotContext";
import ProgressBar from "../components/auth/forgot-password/progress-bar"

const forgotPassword = () => {

    const { currentStep, setCurrentStep } = useForgotContext();

    useEffect(() => {
        setCurrentStep(1) //initially set form to step 1
    }, [])

    type FormData = {
        email: string;
        otp: string;
        password: string;
        confirmPassword: string;
    }

    const INITIAL_DATA: FormData = {
        email: "",
        otp: "",
        password: "",
        confirmPassword: "",
    }

    const [data, setData] = useState(INITIAL_DATA);
    const updateField = (fields: Partial<FormData>) => {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    useEffect(() => {
        console.log(data)
    }, [currentStep])

    return (
        <div className="w-full h-screen flex items-center">

            <div className="w-1/3 h-full">
                <ForgotSidebar />
            </div>

            <div className="w-2/3 flex items-center justify-center">
                <div className="lg:w-1/2 w-full">
                    {
                        currentStep == 1 ? <ResetPassword {...data} updateField={updateField} /> :
                            currentStep == 2 ? <EnterOTP {...data} updateField={updateField} /> :
                                currentStep == 3 ? <SetNewPassword {...data} updateField={updateField} /> :
                                    currentStep == 4 ? <ResetSuccess /> : <ResetPassword {...data} updateField={updateField} />
                    }
                </div>
            </div>

            <ProgressBar />
        </div>
    )
}

export default forgotPassword