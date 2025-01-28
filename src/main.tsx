import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { InventoryProvider } from './context/inventory-context.tsx'
import { SidebarProvider } from './context/sidebar-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <InventoryProvider>
          <App />
        </InventoryProvider>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
)
