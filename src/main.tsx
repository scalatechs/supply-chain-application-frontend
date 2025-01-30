import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { InventoryProvider } from './context/inventory-context.tsx'
import { SidebarProvider } from './context/sidebar-context.tsx'
<<<<<<< HEAD
import SignupProvider from './context/signup-context.tsx'
import ForgotProvider from './context/forgot-context.tsx'
=======
>>>>>>> main

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
<<<<<<< HEAD
      <SignupProvider>
        <ForgotProvider>
          <SidebarProvider>
            <InventoryProvider>
              <App />
            </InventoryProvider>
          </SidebarProvider>
        </ForgotProvider>
      </SignupProvider>
=======
      <SidebarProvider>
        <InventoryProvider>
          <App />
        </InventoryProvider>
      </SidebarProvider>
>>>>>>> main
    </ThemeProvider>
  </StrictMode>,
)
