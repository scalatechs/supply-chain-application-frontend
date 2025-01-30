import { ForgotContext } from "@/context/forgot-context";
import { useContext } from "react";

// Custom hook to use SignupContext
export const useForgotContext = () => {
    const context = useContext(ForgotContext);
    if (!context) {
        throw new Error("useForgotContext must be used within a ForgotProvider");
    }
    return context;
};