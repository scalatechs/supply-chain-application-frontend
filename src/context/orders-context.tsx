import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface OrdersContextType {
    orders: any[];
    setOrders: (orders: any[]) => void;
}

const initialState: OrdersContextType = {
    orders: [],
    setOrders: () => { },
}

//create context
const OrdersContext = createContext<OrdersContextType>(initialState);

//create provider
const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
    const [orders, setOrders] = useState<any[]>([]);

    const token = localStorage.getItem("token")

    //fetch salespersons
    const fetchOrders = async () => {
        try {
            const response = await axios.get(
                "https://supply-chain-application-backend-1.onrender.com/api/v1/order",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setOrders(response.data.data)
        } catch (error: any) {
            console.error("Error:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [])


    return (
        <OrdersContext.Provider value={{ orders, setOrders }}>
            {children}
        </OrdersContext.Provider>
    )
}

export { OrdersContext, OrdersProvider }; 
