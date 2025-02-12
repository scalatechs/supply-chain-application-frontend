import { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext<
    { userData: any; setUserData: React.Dispatch<React.SetStateAction<any>> } | undefined
>(undefined);

// Create provider
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<any>([]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use UserContext
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
