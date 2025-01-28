import { useSignupContext } from "@/context/signup-context"
import UserInformation from "../components/auth/signup/user-information"
import SignupSidebar from "@/components/auth/signup/signup-sidebar"
import BusinessDetails from "@/components/auth/signup/business-details"
import TermsPolicies from "@/components/auth/signup/terms-policies"
import Verification from "@/components/auth/signup/verification"
import { useEffect } from "react"

const Signup = () => {

    const { currentStep, setCurrentStep } = useSignupContext();

    useEffect(() => {
        setCurrentStep(1) //initially set form to step 1
    }, [])

    return (
        <div className="w-full h-screen flex items-center">

            <div className="w-1/3 h-full">
                <SignupSidebar />
            </div>

            <div className="w-2/3 flex items-center justify-center">
                <div className="lg:w-1/2 w-full">
                    {
                        currentStep == 1 ? <UserInformation /> :
                            currentStep == 2 ? <BusinessDetails /> :
                                currentStep == 3 ? <TermsPolicies /> :
                                    currentStep == 4 ? <Verification /> : <UserInformation />
                    }
                </div>
            </div>
        </div>
    )
}

export default Signup