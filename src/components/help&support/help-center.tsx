import { AudioLines, SendHorizonal, ThumbsDown, ThumbsUpIcon, Trash } from "lucide-react"
import logo from "../../assets/Herosection-scalalogo (1).png"
import { Separator } from "../ui/separator"
import axios from "axios"
import { useState } from "react"

const helpCenter = () => {

    const [chat, setChat] = useState("");
    const [chatResponse, setChatResponse] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://supply-chain-application-backend-1.onrender.com/api/v1/chatbot/chat", {
                message: chat
            })
            setIsSubmitted(true)
            setChatResponse(response.data.response)
            console.log(response)
        } catch (error: any) {
            console.log(`Error: ${error.message}`)
        }
    }

    return (
        <div className="xl:w-3/5 w-full border rounded-lg flex flex-col items-center gap-4 p-4">
            <h1 className="text-3xl font-medium block w-full">Help Center</h1>

            {/* Result Section */}
            <p className="text-neutral-600 text-sm">Today {new Date().toLocaleTimeString()}</p>

            {isSubmitted &&
                <>
                    <div className="flex items-start justify-between rounded-lg bg-zinc-200/30 w-full p-4">
                        <h3 className="md:text-base text-sm w-[90%]">
                            {chat}
                        </h3>
                        <img src="https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX1000_.jpg" className="md:h-14 md:w-14 h-9 w-9 object-cover rounded-full" alt="" />
                    </div>

                    <div className="relative flex items-start justify-between rounded-lg bg-blue-50 w-full p-4">
                        <img src={logo} className="md:h-14 md:w-14 h-9 w-9 object-contain rounded-full bg-white" alt="" />
                        <h3 className="md:text-base text-sm w-[90%] mb-9">
                            {chatResponse}
                        </h3>
                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                            <ThumbsUpIcon className="bg-white p-1" color="blue" size={'30px'} />
                            <ThumbsDown className="bg-white p-1" color="blue" size={'30px'} />
                        </div>
                    </div>
                </>
            }

            {/* Prompt Section */}
            <form
                onSubmit={handleSubmit}
                className="w-full relative mt-6 border rounded-lg p-4">

                <input
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                    type="text" className="mb-20 w-full outline-none border-none text-base text-neutral-600" placeholder="Queries relating supply chain application? Ask away..." />

                <button type="submit">
                    <SendHorizonal color="gray" size={'20px'} className="absolute right-4 top-16" />
                </button>

                <Separator className="my-6" />

                <div className="flex md:flex-row flex-col md:items-center items-start gap-2 md:text-sm text-xs font-medium">
                    <div className="border rounded-full p-2 flex items-center gap-2 text-blue-600"><AudioLines size={'20px'} />Voice Message</div>
                    <div className="border rounded-full p-2 flex items-center gap-2 text-red-600"><Trash size={'20px'} />Delete Chat</div>
                </div>
            </form>
        </div>
    )
}

export default helpCenter