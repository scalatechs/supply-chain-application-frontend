import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", value: 586 },
    { month: "February", value: 805 },
    { month: "March", value: 737 },
    { month: "April", value: 673 },
    { month: "May", value: 909 },
    { month: "June", value: 814 },
    { month: "July", value: 865 },
    { month: "August", value: 892 },
    { month: "September", value: 785 },
    { month: "October", value: 843 },
    { month: "November", value: 927 },
    { month: "December", value: 968 }
]

const chartConfig = {
    value: {
        label: "Revenue",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export default function Component() {
    return (
        <Card className="border-none shadow-none -ml-12 bg-transparent">
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                    >
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1" className="transition-all">
                                <stop offset="0%" stopColor="#ededed" />
                                <stop offset="100%" stopColor="#808080" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickMargin={10}
                            ticks={[0, 200, 400, 600, 800, 1000, 1200]}
                            tickFormatter={(value) => `$${value}`}
                            domain={[0, 1200]}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar
                            dataKey="value"
                            fill="url(#barGradient)"
                            radius={4}
                            className="transition-all duration-200 hover:fill-blue-500"
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}