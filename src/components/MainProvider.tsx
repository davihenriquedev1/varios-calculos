"use client";

import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./theme-provider";
import { ReactNode } from "react";

type Props = {
    children:ReactNode
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 12, // 12 hours
        },
    },
});

const persister = createSyncStoragePersister({
    storage: window.localStorage,
});

export const MainProvider = ({children}:Props) => {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
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
        </PersistQueryClientProvider>
    )
}