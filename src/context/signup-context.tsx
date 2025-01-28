import { createContext, ReactNode, useContext, useState } from "react";

interface SignupContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    isFormSubmitted: { [key: number]: boolean };
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
    allFormData: object[]
    setAllFormData: React.Dispatch<React.SetStateAction<object[]>>;
    handleFormData: (data: any) => void
}

// Create context
const SignupContext = createContext<SignupContextType | undefined>(undefined);

// Create provider
const SignupProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [isFormSubmitted, setIsFormSubmitted] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false
    });

    const [allFormData, setAllFormData] = useState<object[]>([]);

    const handleFormData = (data: object) => {
        setAllFormData((prevData) => [...prevData, data]); // Push the new form data into the array
    }

    return (
        <SignupContext.Provider value={{ currentStep, setCurrentStep, isFormSubmitted, setIsFormSubmitted, allFormData, setAllFormData, handleFormData }}>
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
