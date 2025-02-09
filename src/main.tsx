import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { InventoryProvider } from './context/inventory-context.tsx'
import { SidebarProvider } from './context/sidebar-context.tsx'
import SignupProvider from './context/signup-context.tsx'
import ForgotProvider from './context/forgot-context.tsx'
import { SalespersonProvider } from './context/salesperson-context.tsx'
import { OrdersProvider } from './context/orders-context.tsx'
import { ShipmentProvider } from './context/shipment-context.tsx'
import { ReturnProvider } from './context/return-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SignupProvider>
        <ForgotProvider>
          <SidebarProvider>
            <InventoryProvider>
              <SalespersonProvider>
                <OrdersProvider>
                  <ShipmentProvider>
                    <ReturnProvider>
                      <App />
                    </ReturnProvider>
                  </ShipmentProvider>
                </OrdersProvider>
              </SalespersonProvider>
            </InventoryProvider>
          </SidebarProvider>
        </ForgotProvider>
      </SignupProvider>
    </ThemeProvider>
  </StrictMode>,
)
