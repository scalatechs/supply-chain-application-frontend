import { AudioLines, SendHorizonal, ThumbsDown, ThumbsUpIcon, Trash } from "lucide-react"
import logo from "../../assets/Herosection-scalalogo (1).png"
import { Separator } from "../ui/separator"

const helpCenter = () => {
    return (
        <div className="xl:w-3/5 w-full border rounded-lg flex flex-col items-center gap-4 p-4">
            <h1 className="text-3xl font-medium block w-full">Help Center</h1>

            {/* Result Section */}
            <p className="text-neutral-600 text-sm">Today {new Date().toLocaleTimeString()}</p>

            <div className="flex items-start justify-between rounded-lg bg-zinc-200/30 w-full p-4">
                <h3 className="text-base w-[90%]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis minus expedita illo molestias quisquam ducimus aspernatur voluptatum quidem impedit hic vero itaque possimus, voluptates ea!
                </h3>
                <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="h-14 w-14 object-cover rounded-full" alt="" />
            </div>

            <div className="relative flex items-start justify-between rounded-lg bg-blue-50 w-full p-4">
                <img src={logo} className="h-14 w-14 object-contain rounded-full bg-white" alt="" />
                <h3 className="text-base w-[90%] mb-9">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus voluptatibus hic iusto debitis autem deserunt enim quis! Autem ratione eius repellat ipsum nihil fugit, est, esse obcaecati aliquam inventore delectus eaque neque quos quaerat nam distinctio exercitationem provident omnis rerum maxime repudiandae vero? Voluptates, harum enim distinctio quae iusto placeat, obcaecati culpa magnam laudantium eius sint! Voluptates dolores aliquid commodi architecto beatae! Saepe in nemo ad dolorem repellat laboriosam atque ipsa cumque quis vero.
                </h3>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <ThumbsUpIcon className="bg-white p-1" color="blue" size={'30px'} />
                    <ThumbsDown className="bg-white p-1" color="blue" size={'30px'} />
                </div>
            </div>

            {/* Prompt Section */}
            <div className="w-full relative mt-6 border rounded-lg p-4">

                <input type="text" className="mb-20 w-full outline-none border-none text-base text-neutral-600" placeholder="Queries relating supply chain application? Ask away..." />

                <SendHorizonal color="gray" size={'20px'} className="absolute right-4 top-16" />

                <Separator className="my-6" />

                <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="border rounded-full p-2 flex items-center gap-2 text-blue-600"><AudioLines size={'20px'} />Voice Message</div>
                    <div className="border rounded-full p-2 flex items-center gap-2 text-red-600"><Trash size={'20px'} />Delete Chat</div>
                </div>
            </div>
        </div>
    )
}

export default helpCenter