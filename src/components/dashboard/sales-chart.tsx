import BarCharts from "./bar-charts"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from 'lucide-react'

export function SalesChart() {
    return (
        <Card>
            <CardHeader className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 justify-between">
                <div>
                    <CardTitle className="font-medium text-xl">Total Sales</CardTitle>
                    <div className="flex md:flex-row flex-col items-baseline gap-2 mt-6">
                        <span className="md:text-4xl text-2xl font-medium">Rs 8,290.00</span>
                        <span className="text-xs text-green-600">+95% vs Last year</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Select defaultValue="monthly">
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="Select view" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>

            {/* Line Graphs */}
            <BarCharts />
        </Card>
    )
}

