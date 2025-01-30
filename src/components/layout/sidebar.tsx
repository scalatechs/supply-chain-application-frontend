import { UserCircle, CreditCard, ArchiveRestore, Users, CircleHelp, Settings, LogOut } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from "@/lib/utils"
import logo from "../../assets/Nav-mainlogo.svg"
import photo from "../../assets/profile photo.png"
import { useSidebar } from '@/context/sidebar-context'

// SVG components
const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M530-600v-220h290v220H530ZM140-460v-360h290v360H140Zm390 320v-360h290v360H530Zm-390 0v-220h290v220H140Zm60-380h170v-240H200v240Zm390 320h170v-240H590v240Zm0-460h170v-100H590v100ZM200-200h170v-100H200v100Zm170-320Zm220-140Zm0 220ZM370-300Z" />
    </svg>

)

const ShipmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-643.85v431.54q0 5.39 3.46 8.85t8.85 3.46h535.38q5.39 0 8.85-3.46t3.46-8.85v-431.54H620v295.77l-140-70-140 70v-295.77H200ZM212.31-140q-29.92 0-51.12-21.19Q140-182.39 140-212.31v-467.46q0-12.84 4.12-24.5 4.11-11.65 12.34-21.5l56.16-67.92q9.84-12.85 24.61-19.58Q252-820 268.46-820h422.31q16.46 0 31.42 6.73T747-793.69L803.54-725q8.23 9.85 12.34 21.69 4.12 11.85 4.12 24.7v466.3q0 29.92-21.19 51.12Q777.61-140 747.69-140H212.31Zm3.31-563.84H744l-43.62-51.93q-1.92-1.92-4.42-3.08-2.5-1.15-5.19-1.15H268.85q-2.69 0-5.2 1.15-2.5 1.16-4.42 3.08l-43.61 51.93ZM400-643.85v198.08l80-40 80 40v-198.08H400Zm-200 0h560-560Z" /></svg>
)

const InventoryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill='currentColor'><path d="M620-177.23 463.85-333.38 506-375.54l114 114 226.77-226.77 42.15 42.16L620-177.23ZM820-560h-60v-187.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H660v104.61H300V-760h-87.69q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85H440v60H212.31q-29.92 0-51.12-21.19Q140-182.39 140-212.31v-535.38q0-29.92 21.19-51.12Q182.39-820 212.31-820h176.23q8.31-29.23 33.96-48.46t57.5-19.23q33.08 0 58.42 19.23 25.35 19.23 33.66 48.46h175.61q29.92 0 51.12 21.19Q820-777.61 820-747.69V-560ZM480-755.38q15.46 0 25.81-10.35 10.34-10.35 10.34-25.81 0-15.46-10.34-25.81-10.35-10.34-25.81-10.34-15.46 0-25.81 10.34-10.34 10.35-10.34 25.81 0 15.46 10.34 25.81 10.35 10.35 25.81 10.35Z" /></svg>
)

const OrdersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
    </svg>
)

const NotificationsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
    </svg>
)


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const location = useLocation();
    const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

    const navigation = [
        { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
        { name: "Shipment", href: "/shipment", icon: ShipmentIcon },
        { name: "Inventory", href: "/inventory", icon: InventoryIcon },
        { name: "Orders", href: "/orders", icon: OrdersIcon },
<<<<<<< HEAD
        { name: "Returns & Refunds", href: "/return", icon: ArchiveRestore },
=======
        { name: "Returns & Refunds", href: "/returns", icon: ArchiveRestore },
>>>>>>> main
        { name: "Customers", href: "/customers", icon: Users },
        { name: "Sales Personnel", href: "/sales", icon: UserCircle },
        { name: "Notifications", href: "/notifications", icon: NotificationsIcon },
        { separator: true },
        { name: "Subscription", href: "/subscription", icon: CreditCard },
<<<<<<< HEAD
        { name: "Help & Support", href: "/help", icon: CircleHelp },
=======
        { name: "Help & Support", href: "/support", icon: CircleHelp },
>>>>>>> main
        { name: "Settings", href: "/settings", icon: Settings },
    ]

    return (
        <>
            {/* Mobile Sidebar - Always render but translate based on isOpen */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/30 z-30 transition-opacity duration-200",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={closeSidebar}
            />
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-200 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    className
                )}
            >
                <div className="h-full overflow-y-auto">
                    <div className="space-y-12 py-4">
                        <div className="px-4 py-2">
                            <Link to="/">
                                <img src={logo} alt="Main Logo" />
                            </Link>
                        </div>

                        {/* Navigation Items */}
                        <div className="px-3 flex flex-col gap-4">
                            {navigation.map((item) => {
                                if (item.separator) {
                                    return <hr key="separator" className="border-t border-gray-200 my-2" />;
                                }
                                const isActive = location.pathname === item.href ||
                                    (item.href === "/" && location.pathname === "/") ||
                                    (item.href === "/inventory" && location.pathname.startsWith("/inventory"));
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href || ''}
                                        onClick={toggleSidebar}
                                        className={cn(
                                            "flex items-center gap-x-3 rounded-lg px-3 py-3.5 text-sm font-medium hover:bg-blue-50",
                                            isActive
                                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                                : "text-gray-700 hover:text-blue-600"
                                        )}
                                    >
                                        {Icon && <Icon
                                            className={cn(
                                                "h-5 w-5",
                                                isActive ? "text-white" : "text-gray-700"
                                            )}
                                        />}
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Profile Section */}
                        <div className='px-4 flex items-center gap-2 pt-9'>
                            <img src={photo} alt="profile photo" className="h-10 w-10 rounded-full object-cover" />
                            <div>
                                <p className='text-sm font-medium'>Abhi Dangol</p>
                                <p className='text-xs text-gray-500'>abhi11@gmail.com</p>
                            </div>
                            <LogOut className='text-gray-500 ml-2 h-5 w-5 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Sidebar  */}
            <div className={cn(`z-40 pb-12 w-64 bg-white lg:flex hidden flex-col justify-between h-full`, className)}>
                <div className='fixed overflow-y-auto h-full pr-8'>
                    <div className="space-y-12 py-4">
                        <div className="px-4 py-2">
                            <Link to="/">
                                <img src={logo} alt="Main Logo" />
                            </Link>
                        </div>
                        <div className="px-3 flex flex-col gap-4">
                            {navigation.map((item) => {
                                if (item.separator) {
                                    return <hr key="separator" className="border-t border-gray-200 my-2" />;
                                }
                                const isActive = location.pathname === item.href ||
                                    (item.href === "/" && location.pathname === "/") ||
                                    (item.href === "/inventory" && location.pathname.startsWith("/inventory"));
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href || ''}
                                        className={cn(
                                            "flex items-center gap-x-3 rounded-lg px-3 py-3.5 text-sm font-medium hover:bg-blue-50",
                                            isActive
                                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                                : "text-gray-700 hover:text-blue-600"
                                        )}
                                    >
                                        {Icon && <Icon
                                            className={cn(
                                                "h-5 w-5",
                                                isActive ? "text-white" : "text-gray-700"
                                            )}
                                        />
                                        }
                                        {item.name}

                                    </Link>
                                )
                            })}
                        </div>

                        <div className='pl-4 flex items-center justify-center gap-2 pt-9'>
                            <img src={photo} alt="profile photo" className="h-10 w-10 rounded-full object-cover" />
                            <div>
                                <p className='text-sm font-medium'>Abhi Dangol</p>
                                <p className='text-xs text-gray-500'>abhi11@gmail.com</p>
                            </div>
                            <LogOut className='text-gray-500 ml-2 h-5 w-5 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}