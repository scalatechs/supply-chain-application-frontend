import { Bell, ChevronDown, Menu, Search, Settings } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import photo from "../../assets/profile photo.png"
import { useLocation } from "react-router-dom"
import { useSidebar } from '@/context/sidebar-context'

export function Header() {
    const location = useLocation()
    const { toggleSidebar } = useSidebar();
    return (
        <header className="flex h-16 items-center justify-between mt-2 px-4 bg-white">
            <div className='flex items-center gap-2 lg:pl-0 pl-4'>
                <Menu className='lg:hidden' onClick={toggleSidebar} />
<<<<<<< HEAD
                <h1 className="text-3xl capitalize">
                    {location.pathname.split("/")[1] == "return" ? "Return & Refunds" :
                        location.pathname.split("/")[1] == "sales" ? "Salesperson Management" :
                            (
                                location.pathname.split("/")[1] || "Dashboard"
                            )}
                </h1>
=======
                <h1 className="text-3xl capitalize">{location.pathname.split("/")[1] || "Dashboard"}</h1>
>>>>>>> main
            </div>
            <div className="md:flex hidden items-center gap-6">
                <Search className="h-5 w-5 cursor-pointer hover:text-blue-800" />
                <Settings className="h-5 w-5 cursor-pointer hover:text-blue-800" />
                <Bell className="h-5 w-5 cursor-pointer hover:text-blue-800" />
                |
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="h-8 w-8 rounded-full overflow-hidden">
                                <img src={photo} alt="profile photo" className="h-full w-full object-cover" />
                            </div>
                            <div className="text-sm font-medium">Abhi Dangol</div>
                            <ChevronDown className="h-5 w-5 fill-blue-600 text-blue-600" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

