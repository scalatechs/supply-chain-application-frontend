import { useSignupContext } from "../../../hooks/useSignupContext";
import logo from "../../../assets/white-logo.png"
import { Check } from "lucide-react";

const signupSidebar = () => {

    const { currentStep, isFormSubmitted } = useSignupContext();

    const signupSteps = [
        { title: "user information", description: "please enter your information details." },
        { title: "business details", description: "please enter your business details to continue further." },
        { title: "terms & policies", description: "please take your time and read the terms and conditions for your application." },
        { title: "verification", description: "please complete the verification process." }
    ]

    return (
        <div className="xl:w-1/3 lg:w-[40%] w-full h-full fixed bg-[#003DFF] flex flex-col items-start gap-12 py-12 xl:px-24 px-12">
            <img src={logo} alt="" />

            <div className="w-full mt-12">

                {/* For step 1 */}
                <div className="flex items-start gap-4 mb-2">
                    <div className="flex flex-col items-center gap-2">
                        {/* Circle Icon */}
                        <div
                            className="rounded-full bg-white w-[32px] h-[32px] flex items-center justify-center">
                            {
                                isFormSubmitted[1] == true ?
                                    <Check color="#003DFF" size={'20px'} />
                                    :
                                    <div className={`rounded-full ${currentStep == 1 ? "bg-[#003DFF]" : "bg-white"} w-[12px] h-[12px]`}></div>
                            }
                        </div>

                        {/* White Line */}
                        <div className="h-36 bg-white w-[1px]"></div>

                    </div>
                    <div className="text-white">
                        <h1 className="uppercase text-2xl font-semibold">
                            {signupSteps[0].title}
                        </h1>
                        <p className="text-base mt-2 first-letter:capitalize">
                            {signupSteps[0].description}
                        </p>
                    </div>
                </div>

                {/* For step 2 */}
                <div className="flex items-start gap-4 mb-2">
                    <div className="flex flex-col items-center gap-2">
                        {/* Circle Icon */}
                        <div
                            className={`rounded-full ${currentStep == 2 || isFormSubmitted[2] == true ? "bg-white" : "border border-white"} w-[32px] h-[32px] flex items-center justify-center`}>

                            {
                                isFormSubmitted[2] == true ?
                                    <Check color="#003DFF" size={'20px'} />
                                    :
                                    <div className={`rounded-full ${currentStep == 2 ? "bg-[#003DFF]" : "bg-white"} w-[12px] h-[12px]`}></div>
                            }
                        </div>

                        {/* White Line */}
                        <div className="h-36 bg-white w-[1px]"></div>

                    </div>
                    <div className="text-white">
                        <h1 className="uppercase text-2xl font-semibold">
                            {signupSteps[1].title}
                        </h1>
                        <p className="text-base mt-2 first-letter:capitalize">
                            {signupSteps[1].description}
                        </p>
                    </div>
                </div>

                {/* For step 3 */}
                <div className="flex items-start gap-4 mb-2">
                    <div className="flex flex-col items-center gap-2">
                        {/* Circle Icon */}
                        <div
                            className={`rounded-full ${currentStep == 3 || isFormSubmitted[3] == true ? "bg-white" : "border border-white"} w-[32px] h-[32px] flex items-center justify-center`}>

                            {
                                isFormSubmitted[3] == true ?
                                    <Check color="#003DFF" size={'20px'} />
                                    :
                                    <div className={`rounded-full ${currentStep == 3 ? "bg-[#003DFF]" : "bg-white"} w-[12px] h-[12px]`}></div>
                            }
                        </div>

                        {/* White Line */}
                        <div className="h-36 bg-white w-[1px]"></div>

                    </div>
                    <div className="text-white">
                        <h1 className="uppercase text-2xl font-semibold">
                            {signupSteps[2].title}
                        </h1>
                        <p className="text-base mt-2 first-letter:capitalize">
                            {signupSteps[2].description}
                        </p>
                    </div>
                </div>

                {/* For step 4 */}
                <div className="flex items-start gap-4 mb-2">

                    {/* Circle Icon */}
                    <div
                        className={`rounded-full ${currentStep == 4 || isFormSubmitted[4] == true ? "bg-white" : "border border-white"} w-[32px] h-[32px] flex items-center justify-center`}>

                        {
                            isFormSubmitted[4] == true ?
                                <Check color="#003DFF" size={'20px'} />
                                :
                                <div className={`rounded-full ${currentStep == 4 ? "bg-[#003DFF]" : "bg-white"} w-[12px] h-[12px]`}></div>
                        }
                    </div>

                    <div className="text-white">
                        <h1 className="uppercase text-2xl font-semibold">
                            {signupSteps[3].title}
                        </h1>
                        <p className="text-base mt-2 first-letter:capitalize">
                            {signupSteps[3].description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default signupSidebar