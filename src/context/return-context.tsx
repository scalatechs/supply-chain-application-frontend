import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface ReturnContextType {
    returnItems: any[];
    setReturnItems: (returnItems: any[]) => void;
}

const initialState: ReturnContextType = {
    returnItems: [],
    setReturnItems: () => { },
}

//create context
const ReturnContext = createContext<ReturnContextType>(initialState);

//create provider
const ReturnProvider = ({ children }: { children: React.ReactNode }) => {
    const [returnItems, setReturnItems] = useState<any[]>([]);

    const token = localStorage.getItem("token")

    //fetch salespersons
    const fetchOrders = async () => {
        try {
            const response = await axios.get(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/refund/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setReturnItems(response.data.data)
        } catch (error: any) {
            console.error("Error:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [])


    return (
        <ReturnContext.Provider value={{ returnItems, setReturnItems }}>
            {children}
        </ReturnContext.Provider>
    )
}

export { ReturnContext, ReturnProvider }; 
