import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface ShipmentContextType {
    shipment: any[];
    setShipment: (shipment: any[]) => void;
}

const initialState: ShipmentContextType = {
    shipment: [],
    setShipment: () => { },
}

//create context
const ShipmentContext = createContext<ShipmentContextType>(initialState);

//create provider
const ShipmentProvider = ({ children }: { children: React.ReactNode }) => {
    const [shipment, setShipment] = useState<any | []>([]);

    const fetchProducts = async () => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.get(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/shipment",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setShipment(response.data.data)
        } catch (error: any) {
            console.error("Error submitting product:", error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <ShipmentContext.Provider value={{ shipment, setShipment }}>
            {children}
        </ShipmentContext.Provider>
    )
}

export { ShipmentContext, ShipmentProvider }; 
