import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
    title: string
    value: string | number
    icon: string
    trend?: {
        value: number
        isPositive: boolean
    },
    currency?: string
    comparison?: string
}

export function StatsCard({ title, value, icon, trend, comparison, currency }: StatsCardProps) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <h3 className="md:text-sm text-xs font-medium text-muted-foreground">{title}</h3>
                    {icon && <img className="md:w-7 md:h-7 w-5 h-5" src={icon} alt="" />}
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                    <h2 className="md:text-4xl text-2xl font-semibold">{currency}{value}</h2>
                    {trend && (
                        <span
                            className={cn(
                                "text-xs font-medium",
                                trend.isPositive ? "text-green-600" : "text-red-600"
                            )}
                        >
                            {trend.isPositive ? "+" : "-"}
                            {trend.value}%
                        </span>
                    )}
                </div>
                {comparison && (
                    <p className="mt-1 text-xs text-neutral-400">vs {comparison}</p>
                )}
            </CardContent>
        </Card>
    )
}
