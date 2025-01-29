import { Check } from "lucide-react";
import logo from "../../../assets/Nav-mainlogo.svg"
import { useForgotContext } from "../../../hooks/useForgotContext";
import { useNavigate } from "react-router-dom";

const resetSuccess = () => {
    const { currentStep, setIsFormSubmitted } = useForgotContext()
    const navigate = useNavigate();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(prevState => {
            const newState = {
                ...prevState,
                [currentStep]: true
            };
            return newState;
        });
        navigate('/login')
    };

    return (
        <div className="w-full flex flex-col items-center gap-12 -mt-48">
            <img src={logo} className="w-64 mb-24" alt="" />

            <div className="shadow-lg p-4 rounded-lg relative">
                <Check className="size-[40px] text-[#003dff]" />
            </div>

            <div className="text-center">
                <h1 className="text-4xl text-neutral-700 font-semibold">Password reset success</h1>
                <p className="text-sm text-gray-400 text-center mt-1">
                    Hooray! Your password has been reset.
                </p>
            </div>

            <form onSubmit={handleFormSubmit} className="w-[30rem] flex flex-col items-start gap-6">
                <button
                    type="submit"
                    className="bg-[#003dff] text-white font-semibold py-3.5 text-base rounded-lg w-full">
                    Go back to login
                </button>
            </form>

        </div>
    )
}

export default resetSuccess