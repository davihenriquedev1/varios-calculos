import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Vários Cálculos',
    default: 'Vários Cálculos'
  },
  description: "Um site com diversas calculadoras úteis, incluindo calculadora IMC, de investimentos e científica. Acesse agora e facilite seus cálculos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
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
      </body>
    </html>
  );
}