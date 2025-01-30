"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = Array.from({ length: 15 }, (_, i) => {
    const day = i * 2 + 1
    return {
        successRate: Math.min(100, day * 3 + Math.random() * 10),
        efficiency: Math.min(100, day * 2 + Math.random() * 15),
        delay: Math.min(100, day * 2 + Math.random() * 20),
    }
})

const chartConfig = {
    successRate: {
        label: "Success Rate",
        color: "hsl(142, 76%, 36%)", // Green
    },
    efficiency: {
        label: "Efficiency",
        color: "hsl(217, 91%, 60%)", // Blue
    },
    delay: {
        label: "Delay",
        color: "hsl(0, 84%, 60%)" // Red
    }
} satisfies ChartConfig

export default function Component() {
    return (
        <Card className="border-none shadow-none -ml-1 bg-transparent">
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            right: 12,
                            top: 12,
                            bottom: 24,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                            domain={[1, 30]}
                            ticks={[1, 3, 5, 7, 10, 13, 15, 17, 20, 23, 25, 27, 30]}
                            tick={{ fontSize: 12 }}
                            interval={0}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `${value}%`}
                            domain={[0, 100]}
                            ticks={[0, 20, 40, 60, 80, 100]}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                        <Area
                            dataKey="successRate"
                            type="monotone"
                            stroke={chartConfig.successRate.color}
                            fillOpacity={0}
                            strokeWidth={3}
                        />
                        <Area
                            dataKey="efficiency"
                            type="monotone"
                            stroke={chartConfig.efficiency.color}
                            fillOpacity={0}
                            strokeWidth={3}
                        />
                        <Area
                            dataKey="delay"
                            type="monotone"
                            stroke={chartConfig.delay.color}
                            fillOpacity={0}
                            strokeWidth={3}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
