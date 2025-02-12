import ResetPassword from "../components/auth/forgot-password/reset-password"
import ForgotSidebar from "@/components/auth/forgot-password/forgot-sidebar"
import EnterOTP from "@/components/auth/forgot-password/enter-otp"
import SetNewPassword from "@/components/auth/forgot-password/set-new-password"
import ResetSuccess from "@/components/auth/forgot-password/reset-success"
import { useEffect, useState } from "react"
import { useForgotContext } from "../hooks/useForgotContext";

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
        <div className="lg:-ml-4 w-full h-screen flex lg:flex-row items-center gap-12 lg:p-0 p-6">

            <div className="xl:w-1/3 lg:w-[40%] lg:flex hidden w-full h-full">
                <ForgotSidebar />
            </div>

            <div className="xl:w-2/3 lg:w-1/2 w-full flex items-center justify-center">
                <div className="xl:w-1/2 w-full">
                    {
                        currentStep == 1 ? <ResetPassword {...data} updateField={updateField} /> :
                            currentStep == 3 ? <EnterOTP data={data} {...data} updateField={updateField} /> :
                                currentStep == 2 ? <SetNewPassword data={data} {...data} updateField={updateField} /> :
                                    currentStep == 4 ? <ResetSuccess /> : <ResetPassword {...data} updateField={updateField} />
                    }
                </div>
            </div>
        </div>
    )
}

export default forgotPassword