import { useSignupContext } from "../hooks/useSignupContext";
import UserInformation from "../components/auth/signup/user-information"
import SignupSidebar from "@/components/auth/signup/signup-sidebar"
import BusinessDetails from "@/components/auth/signup/business-details"
import TermsPolicies from "@/components/auth/signup/terms-policies"
import Verification from "@/components/auth/signup/verification"
import { useEffect, useState } from "react"

const Signup = () => {

    const { currentStep, setCurrentStep } = useSignupContext();

    useEffect(() => {
        setCurrentStep(1) //initially set form to step 1 on page reload
    }, [])

    type FormData = {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        otp: string;
        password: string;
        confirmPassword: string;
        companyName: string;
        registrationNumber: string;
        location: string;
        termsPolicies: boolean
    }

    const INITIAL_DATA: FormData = {
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        otp: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        registrationNumber: "",
        location: "",
        termsPolicies: false
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
                <SignupSidebar />
            </div>

            <div className="xl:w-2/3 lg:w-1/2 w-full flex items-center justify-center">
                <div className="xl:w-1/2 w-full">
                    {
                        currentStep == 1 ? <UserInformation {...data} updateField={updateField} /> :
                            currentStep == 2 ? <BusinessDetails {...data} updateField={updateField} /> :
                                currentStep == 3 ? <TermsPolicies {...data} updateField={updateField} /> :
                                    currentStep == 4 ? <Verification {...data} updateField={updateField} /> : <UserInformation {...data} updateField={updateField} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Signup