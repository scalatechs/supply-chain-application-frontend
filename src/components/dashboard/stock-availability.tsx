import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from 'lucide-react'
import axios from "axios"
import { useEffect, useState } from "react"

export function StockAvailability() {

    const [data, setData] = useState<any | []>([])

    const stockData = {
        total: data?.totalStock,
        inStock: data?.totalStock,
        lowStock: 0,
        outOfStock: 200,
        lowStockItems: [
            { name: "Canned Foods", count: 22, company: "Apple, Inc", color: "#00c8ff" },
            { name: "Toilet Papers", count: 12, company: "Dell, Inc", color: "#0000e3" },
            { name: "Wai Wai Instant Noodles", count: 19, company: "Hp, Inc", color: "#31356e" },
        ],
    }

    const token = localStorage.getItem('token')
    const fetchStockData = async () => {
        try {
            const response = await axios.get("https://supply-chain-application-backend-1.onrender.com/api/v1/dashboard/stock", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            console.log(response.data.data)
            setData(response.data.data)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchStockData()
    }, [])
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Stock Availability</CardTitle>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-9">
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">In Stock</span>
                            <span className="text-sm text-muted-foreground">
                                {stockData.inStock} Units
                            </span>
                        </div>
                        <Progress value={(stockData.inStock / stockData.total) * 100} className="mt-2" color={stockData.lowStockItems[0].color} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Low Stock</span>
                            <span className="text-sm text-muted-foreground">{stockData.lowStock} Units</span>
                        </div>
                        <Progress value={(stockData.lowStock / stockData.total) * 100} className="mt-2" color={stockData.lowStockItems[1].color} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Out Of Stock</span>
                            <span className="text-sm text-muted-foreground">{stockData.outOfStock} Units</span>
                        </div>
                        <Progress value={(stockData.outOfStock / stockData.total) * 100} className="mt-2" color={stockData.lowStockItems[2].color} />
                    </div>
                    <div className="mt-6">
                        <h4 className="text-sm font-medium">Low Stock Items</h4>
                        <div className="mt-2 space-y-6">
                            {stockData.lowStockItems.map((item) => (
                                <div key={item.name} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 w-3/5">
                                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span>{item.name}</span>
                                    </div>
                                    <span className="text-muted-foreground w-1/5">{item.count}</span>
                                    <span className="text-muted-foreground w-1/5">{item.company}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

