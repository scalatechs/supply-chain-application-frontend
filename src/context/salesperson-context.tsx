import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface SalespersonContextType {
    salesperson: any[];
    setSalesperson: (salesperson: any[]) => void;
}

const initialState: SalespersonContextType = {
    salesperson: [],
    setSalesperson: () => { },
}

//create context
const SalespersonContext = createContext<SalespersonContextType>(initialState);

//create provider
const SalespersonProvider = ({ children }: { children: React.ReactNode }) => {
    const [salesperson, setSalesperson] = useState<any[]>([]);

    const token = localStorage.getItem("token")

    //fetch salespersons
    const fetchSalesperson = async () => {
        try {
            const response = await axios.get(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/sales/get",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setSalesperson(response.data.data)
        } catch (error: any) {
            console.error("Error:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchSalesperson();
    }, [])


    return (
        <SalespersonContext.Provider value={{ salesperson, setSalesperson }}>
            {children}
        </SalespersonContext.Provider>
    )
}

export { SalespersonContext, SalespersonProvider }; 
