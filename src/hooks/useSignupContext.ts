import { SignupContext } from "@/context/signup-context";
import { useContext } from "react";

// Custom hook to use SignupContext
export const useSignupContext = () => {
    const context = useContext(SignupContext);
    if (!context) {
        throw new Error("useSignupContext must be used within a SignupProvider");
    }
    return context;
};