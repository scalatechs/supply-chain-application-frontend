import { useForgotContext } from "../../../hooks/useForgotContext";

const progressBar = () => {
    const { currentStep } = useForgotContext();
    return (
        <div className="md:w-[30rem] w-full absolute bottom-8 flex items-center md:justify-between justify-center gap-2">
            <div className={`h-2 ${currentStep == 1 ? "bg-[#003dff]" : "bg-gray-200"} md:w-1/4 w-20 rounded-lg`}></div>
            <div className={`h-2 ${currentStep == 2 ? "bg-[#003dff]" : "bg-gray-200"} md:w-1/4 w-20 rounded-lg`}></div>
            <div className={`h-2 ${currentStep == 3 ? "bg-[#003dff]" : "bg-gray-200"} md:w-1/4 w-20 rounded-lg`}></div>
            <div className={`h-2 ${currentStep == 4 ? "bg-[#003dff]" : "bg-gray-200"} md:w-1/4 w-20 rounded-lg`}></div>
        </div>
    )
}

export default progressBar