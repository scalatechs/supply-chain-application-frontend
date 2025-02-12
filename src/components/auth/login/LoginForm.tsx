import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios"
import { EyeOff, Mail } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleFormSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://supply-chain-application-backend-1.onrender.com/api/v1/distributor/signin", { email: email, password: password }, { withCredentials: true })
            localStorage.setItem("token", response.data.accessToken)
            if (response.status == 200 || response.status == 201) {
                alert("Logged in successfully!")
                navigate("/dashboard");
            }
        } catch (error: any) {
            alert(`Error: ${error.message}`)
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col items-center gap-6">
            <h1 className="md:text-4xl text-2xl font-semibold text-center">Login</h1>
            <div className="w-full">
                <label
                    htmlFor="email"
                    className="md:text-base text-sm">
                    Email Address
                </label>
                <div className="bg-[#f7fbff] w-full flex items-center gap-4 border pr-4 rounded-xl">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" name="email"
                        placeholder="username@gmail.com"
                        className="w-full bg-[#f7fbff] mt-1 rounded-xl pl-4  py-2 border-none outline-none" />
                    <Mail size={'17px'} />
                </div>
            </div>

            <div className="w-full">
                <label
                    htmlFor="password"
                    className="md:text-base text-sm">
                    Password
                </label>
                <div className="bg-[#f7fbff] mt-1 w-full flex items-center gap-4 border pr-4 rounded-xl">
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" name="password"
                        placeholder="***************"
                        className="w-full bg-[#f7fbff] rounded-xl pl-4  py-2 border-none outline-none" />
                    <EyeOff size={'17px'} />
                </div>
            </div>

            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Checkbox />
                    <span className="font-medium md:text-base text-sm">Remember Me</span>
                </div>

                <Link to={'/forgot'} className="md:text-base text-sm underline text-blue-700 hover:text-blue-500">
                    Forgot Password?
                </Link>
            </div>

            <button type="submit" className="w-full rounded-lg bg-[#003DFF] text-white py-3">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm