import { Checkbox } from "@radix-ui/react-checkbox"
import { EyeOff, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <form className="w-full flex flex-col items-center gap-6">
            <h1 className="text-4xl font-semibold text-center">Login</h1>
            <div className="w-full">
                <label
                    htmlFor="email"
                    className="text-base">
                    Email Address
                </label>
                <div className="bg-[#f7fbff] w-full flex items-center gap-4 border pr-4 rounded-xl">
                    <input
                        type="email" name="email"
                        placeholder="username@gmail.com"
                        className="w-full bg-[#f7fbff] mt-1 rounded-xl pl-4  py-2 border-none outline-none" />
                    <Mail size={'17px'} />
                </div>
            </div>

            <div className="w-full">
                <label
                    htmlFor="password"
                    className="text-base">
                    Password
                </label>
                <div className="bg-[#f7fbff] mt-1 w-full flex items-center gap-4 border pr-4 rounded-xl">
                    <input
                        type="password" name="password"
                        placeholder="***************"
                        className="w-full bg-[#f7fbff] rounded-xl pl-4  py-2 border-none outline-none" />
                    <EyeOff size={'17px'} />
                </div>
            </div>

            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Checkbox />
                    <span className="font-medium">Remember Me</span>
                </div>

                <Link to={'/forgot'} className="underline text-blue-700 hover:text-blue-500">
                    Forgot Password?
                </Link>
            </div>

            <Link to={'/dashboard'} className="w-full">
                <button className="w-full rounded-lg bg-[#003DFF] text-white py-3">
                    Sign In
                </button>
            </Link>
        </form>
    )
}

export default LoginForm