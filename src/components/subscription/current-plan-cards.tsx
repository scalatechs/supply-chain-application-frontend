import { Separator } from "../ui/separator"

const currentPlanCards = ({
    title,
    value,
    description,
    link
}: {
    title: string,
    value: string,
    description: string,
    link: string
}) => {
    return (
        <div className="lg:w-[25rem] w-full lg:h-52 h-auto border rounded-lg p-6 flex flex-col items-start gap-2">
            <h1 className="md:text-2xl text-base">{title}</h1>
            <Separator />
            <h3 className="md:text-2xl text-base">{value}</h3>
            <p className="text-neutral-600 text-xs">
                {description}
            </p>
            <a href="#" className="md:text-sm text-xs underline text-blue-600 font-medium">
                {link}
            </a>
        </div>
    )
}

export default currentPlanCards