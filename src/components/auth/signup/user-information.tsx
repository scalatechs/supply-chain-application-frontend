<<<<<<< HEAD
import { useSignupContext } from "../../../hooks/useSignupContext";
import { ChevronRight } from "lucide-react";
import { FormEvent } from "react";

interface UserInformationProps {
    phoneNumber: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    updateField: (data: Partial<{
        phoneNumber: string;
        email: string;
        username: string;
        password: string;
        confirmPassword: string;
    }>) => void;
}

const UserInformation = ({
    phoneNumber,
    email,
    username,
    password,
    confirmPassword,
    updateField
}: UserInformationProps) => {

    const { currentStep, setCurrentStep, setIsFormSubmitted } = useSignupContext();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const requiredFields = {
            phoneNumber: formData.get("phoneNumber"),
            email: formData.get("email"),
            username: formData.get("username"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword")
        };

        const isFormValid = Object.values(requiredFields).every(field => field && field !== "");

        if (!isFormValid) {
            alert("Please fill out all required fields.");
            return;
        }

        if (requiredFields.password !== requiredFields.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setIsFormSubmitted(prevState => ({
            ...prevState,
            [currentStep]: true
        }));

        setCurrentStep(currentStep + 1);
    };

    return (
        <>
            <h1 className="text-5xl font-semibold">User Information</h1>
            <p className="text-base text-gray-600 mt-4 mb-12">
                Please fill out the user information form. Make sure all the details and information are absolutely true.
            </p>

            <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-start gap-6">
                {/* Phone Number */}
                <div className="w-full flex items-end gap-2">
                    <div className="w-1/2">
                        <label htmlFor="phoneNumber" className="text-base font-medium">
                            Phone Number
                        </label>
                        <input
                            required
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                        />
                    </div>
                    <input
                        required
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="w-1/2 mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                    />
                </div>

                {/* Phone Number w/ country code */}
                <div className="w-full">
                    <label htmlFor="phoneNumber" className="text-base font-medium">
                        Phone Number
                    </label>
                    <div className="flex items-end gap-2">
                        <select className="border border-neutral-400 py-[0.8rem] rounded-lg px-2">
                            <option value="977">+ 977</option>
                            <option value="920">+ 920</option>
                            <option value="100">+ 100</option>
                        </select>
                        <input
                            value={phoneNumber}
                            onChange={(e) => updateField({ phoneNumber: e.target.value })}
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="w-full">
                    <label htmlFor="email" className="text-base font-medium">
                        Email Address
                    </label>
                    <input
                        value={email}
                        onChange={(e) => updateField({ email: e.target.value })}
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Username */}
                <div className="w-full">
                    <label htmlFor="username" className="text-base font-medium">
                        Username
                    </label>
                    <input
                        value={username}
                        onChange={(e) => updateField({ username: e.target.value })}
                        required
                        type="text"
                        id="username"
                        name="username"
                        placeholder="johndoe"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Password */}
                <div className="w-full">
                    <label htmlFor="password" className="text-base font-medium">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => updateField({ password: e.target.value })}
                        required
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Confirm Password */}
                <div className="w-full">
                    <label htmlFor="confirmPassword" className="text-base font-medium">
                        Confirm Password
                    </label>
                    <input
                        value={confirmPassword}
                        onChange={(e) => updateField({ confirmPassword: e.target.value })}
                        required
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Re-Enter Password"
                        className="w-full mt-1 rounded-sm px-4 py-3 border border-neutral-400 outline-none focus:border-blue-500"
                    />
                </div>

                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#003dff] text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#0035e0] transition-colors"
                    >
                        Next Step
                        <ChevronRight />
                    </button>
                </div>
            </form>
        </>
    );
};

export default UserInformation;
=======

const userInformation = () => {
    return (
        <div>
            user information
        </div>
    )
}

export default userInformation;
>>>>>>> main
