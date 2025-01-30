import { WandSparkles } from "lucide-react"
import { Separator } from "../ui/separator"

const prompts = () => {

    const data = [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nesciunt dolores sapiente perspiciatis odio ducimus consectetur. Nemo nulla esse sapiente non! Tempora a eius dolorum.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nesciunt dolores sapiente perspiciatis odio ducimus consectetur. Nemo nulla esse sapiente non! Tempora a eius dolorum.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nesciunt dolores sapiente perspiciatis odio ducimus consectetur. Nemo nulla esse sapiente non! Tempora a eius dolorum.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nesciunt dolores sapiente perspiciatis odio ducimus consectetur. Nemo nulla esse sapiente non! Tempora a eius dolorum.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nesciunt dolores sapiente perspiciatis odio ducimus consectetur. Nemo nulla esse sapiente non! Tempora a eius dolorum.",
    ]

    return (
        <div className="xl:w-2/5 w-full border rounded-lg flex flex-col items-center gap-4 p-4">
            <h1 className="text-xl font-medium block w-full">Prompts</h1>

            {data.map((_) => (
                <div className="w-full mt-4 flex flex-col items-start gap-4">
                    <div className="flex items-start gap-4">
                        <WandSparkles color="blue" className="mt-2" size={'17px'} />
                        <p className="w-[90%] text-sm text-neutral-700">{_}</p>
                    </div>
                    <Separator />
                </div>
            ))}
        </div>
    )
}

export default prompts