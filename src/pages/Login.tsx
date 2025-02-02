import bgImage from "../assets/login image.png"
import LoginForm from "@/components/auth/login/LoginForm"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="w-full px-12 py-4 h-screen flex items-center gap-12 text-[#313957]">
            <div className="lg:w-1/2 w-full h-full flex items-center justify-end">
                <div className="lg:w-[35rem] w-full flex flex-col gap-6 justify-end">

                    {/* Login Form */}
                    <LoginForm />

                    {/* Separator */}
                    <div className="w-full flex items-center justify-center gap-2">
                        <div className="h-[1px] bg-blue-200 w-[40%]"></div>
                        <span className="md:text-base text-sm">Or</span>
                        <div className="h-[1px] bg-blue-200 w-[40%]"></div>
                    </div>

                    <h3 className="md:text-base text-sm text-center">Don't have an account?&nbsp;
                        <Link to={'/signup'} className="underline text-blue-700 hover:text-blue-500">
                            Sign up
                        </Link>
                    </h3>
                </div>
            </div>

            <div className="w-1/2 h-full lg:flex hidden justify-end">
                <img
                    src={bgImage}
                    className="h-full w-full object-contain rounded-2xl" alt="" />
            </div>
        </div>
    )
}

export default Login