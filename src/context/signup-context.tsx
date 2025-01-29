import { createContext, ReactNode, useState } from "react";

interface SignupContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    isFormSubmitted: { [key: number]: boolean };
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
}

// Create context
export const SignupContext = createContext<SignupContextType | undefined>(undefined);

// Create provider
const SignupProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [isFormSubmitted, setIsFormSubmitted] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false
    });

    return (
        <SignupContext.Provider value={{ currentStep, setCurrentStep, isFormSubmitted, setIsFormSubmitted }}>
            {children}
        </SignupContext.Provider>
    );
};

export default SignupProvider;


