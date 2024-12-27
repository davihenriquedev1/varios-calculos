import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata: Metadata = {
  title: {
    template: '%s | Vários Cálculos',
    default: 'Vários Cálculos'
  },
  description: "Um site com diversas calculadoras úteis, incluindo calculadora IMC, de investimentos e científica. Acesse agora e facilite seus cálculos!",
};

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
		<body
			className="antialiased"
		>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider  
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>	
					<Header/>
					{children}
					<Footer/>
				</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" position="bottom"
				/>
        	</QueryClientProvider>
		</body>
		</html>
	);
}