import { createContext, ReactNode, useContext, useState } from "react";

interface SignupContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

// Create context
const SignupContext = createContext<SignupContextType | undefined>(undefined);

// Create provider
const SignupProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <SignupContext.Provider value={{ currentStep, setCurrentStep }}>
            {children}
        </SignupContext.Provider>
    );
};

export default SignupProvider;

// Custom hook to use SignupContext
export const useSignupContext = () => {
    const context = useContext(SignupContext);
    if (!context) {
        throw new Error("useSignupContext must be used within a SignupProvider");
    }
    return context;
};
