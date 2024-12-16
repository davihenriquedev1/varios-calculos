"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactNode } from "react"

type Props = {
    children:ReactNode
}

const queryClient = new QueryClient();

export const Providers = ({children}:Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" position="bottom"
            />
        </QueryClientProvider>
    )
}