<<<<<<< HEAD
import { createContext, ReactNode, useState } from "react";
=======
import { createContext, ReactNode, useContext, useState } from "react";
>>>>>>> main

interface SignupContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
<<<<<<< HEAD
    isFormSubmitted: { [key: number]: boolean };
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
}

// Create context
export const SignupContext = createContext<SignupContextType | undefined>(undefined);
=======
}

// Create context
const SignupContext = createContext<SignupContextType | undefined>(undefined);
>>>>>>> main

// Create provider
const SignupProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
<<<<<<< HEAD
    const [isFormSubmitted, setIsFormSubmitted] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false
    });

    return (
        <SignupContext.Provider value={{ currentStep, setCurrentStep, isFormSubmitted, setIsFormSubmitted }}>
=======

    return (
        <SignupContext.Provider value={{ currentStep, setCurrentStep }}>
>>>>>>> main
            {children}
        </SignupContext.Provider>
    );
};

export default SignupProvider;

<<<<<<< HEAD

=======
// Custom hook to use SignupContext
export const useSignupContext = () => {
    const context = useContext(SignupContext);
    if (!context) {
        throw new Error("useSignupContext must be used within a SignupProvider");
    }
    return context;
};
>>>>>>> main
