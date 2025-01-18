import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ArrowUpRight } from "lucide-react"
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 214, mobile: 140 },
    { month: "August", desktop: 214, mobile: 140 },
    { month: "September", desktop: 214, mobile: 140 },
    { month: "October", desktop: 214, mobile: 140 },
    { month: "November", desktop: 214, mobile: 140 },
    { month: "December", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function ProductSales({ units }: { units: number }) {
    return (
        <Card className="w-full border-none shadow-none">
            <CardHeader>
                <CardTitle className="text-3xl font-medium">{units} Units</CardTitle>
                <CardDescription className="flex items-center gap-4">
                    <p className="text-sm text-neutral-500">vs Last month</p>
                    <div className="flex items-center gap-1 rounded-full px-2 py-1 bg-green-200 text-green-700 text-xs">
                        +9.3% <ArrowUpRight className="w-4 h-4" />
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -20,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={5}
                            domain={[0, 'dataMax']}
                            interval="preserveStartEnd"
                            ticks={[0, 200, 400, 600, 800]} // Specify the ticks
                            tickFormatter={(value) => value}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            dataKey="mobile"
                            type="natural"
                            fill="lightblue"
                            fillOpacity={0.4}
                            stroke="lightblue"
                            stackId="a"
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="darkblue"
                            fillOpacity={0.4}
                            stroke="darkblue"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
