import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface InventoryContextType {
    inventory: any[];
    setInventory: (inventory: any[]) => void;
}

const initialState: InventoryContextType = {
    inventory: [],
    setInventory: () => { },
}

//create context
const InventoryContext = createContext<InventoryContextType>(initialState);

//create provider
const InventoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [inventory, setInventory] = useState<any | []>([]);

    const fetchProducts = async () => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.get(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/product",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setInventory(response.data.data)
            console.log(response.data.data)
        } catch (error: any) {
            console.error("Error submitting product:", error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <InventoryContext.Provider value={{ inventory, setInventory }}>
            {children}
        </InventoryContext.Provider>
    )
}

export { InventoryContext, InventoryProvider }; 
