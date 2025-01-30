<<<<<<< HEAD
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
        username: string;
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
        username: "",
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
        <div className="w-full h-screen flex items-center">

            <div className="w-1/3 h-full">
                <SignupSidebar />
            </div>

            <div className="w-2/3 flex items-center justify-center">
                <div className="lg:w-1/2 w-full">
                    {
                        currentStep == 1 ? <UserInformation {...data} updateField={updateField} /> :
                            currentStep == 2 ? <BusinessDetails {...data} updateField={updateField} /> :
                                currentStep == 3 ? <TermsPolicies {...data} updateField={updateField} /> :
                                    currentStep == 4 ? <Verification {...data} updateField={updateField} /> : <UserInformation {...data} updateField={updateField} />
                    }
                </div>
=======
import logo from "../assets/white-logo.png"

const Signup = () => {
    return (
        <div className="w-full h-screen flex items-center">
            <div className="w-1/3 h-full bg-[#003DFF] flex flex-col items-start gap-6 p-12">
                <img src={logo} alt="" />
            </div>

            <div className="w-2/3">

>>>>>>> main
            </div>
        </div>
    )
}

export default Signup