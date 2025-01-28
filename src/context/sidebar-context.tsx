import { createContext, useState, useContext } from 'react';

interface SidebarContextType {
    isOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
    isOpen: false,
    toggleSidebar: () => { },
    closeSidebar: () => { },
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(prev => !prev);
    const closeSidebar = () => setIsOpen(false);

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebar = () => useContext(SidebarContext);
