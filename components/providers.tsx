'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import {SidebarProvider} from "@/lib/hooks/use-sidebar";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </NextThemesProvider>
  )
}
