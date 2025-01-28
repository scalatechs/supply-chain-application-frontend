import { createContext, ReactNode, useContext, useState } from "react";

interface ForgotContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    isFormSubmitted: { [key: number]: boolean };
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
    allFormData: Record<number, Record<string, string>>;
    setAllFormData: React.Dispatch<React.SetStateAction<Record<number, Record<string, string>>>>;
}

// Create context
const ForgotContext = createContext<ForgotContextType | undefined>(undefined);

// Create provider
const ForgotProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [isFormSubmitted, setIsFormSubmitted] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false
    });
    const [allFormData, setAllFormData] = useState<Record<number, Record<string, string>>>({});

    return (
        <ForgotContext.Provider value={{ currentStep, setCurrentStep, isFormSubmitted, setIsFormSubmitted, allFormData, setAllFormData }}>
            {children}
        </ForgotContext.Provider>
    );
};

export default ForgotProvider;

// Custom hook to use SignupContext
export const useForgotContext = () => {
    const context = useContext(ForgotContext);
    if (!context) {
        throw new Error("useSignupContext must be used within a SignupProvider");
    }
    return context;
};
