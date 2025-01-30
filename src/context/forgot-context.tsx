import { createContext, ReactNode, useState } from "react";

interface ForgotContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    isFormSubmitted: { [key: number]: boolean };
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
}

// Create context
export const ForgotContext = createContext<ForgotContextType | undefined>(undefined);

// Create provider
const ForgotProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [isFormSubmitted, setIsFormSubmitted] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false
    });
    return (
        <ForgotContext.Provider value={{ currentStep, setCurrentStep, isFormSubmitted, setIsFormSubmitted }}>
            {children}
        </ForgotContext.Provider>
    );
};

export default ForgotProvider;