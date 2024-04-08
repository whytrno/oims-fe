import "@/app/globals.css"
import {Inter as FontSans} from "next/font/google"
import {cn} from "@/lib/utils";
import React from "react";
import {Toaster} from "@/components/ui/sonner";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        {children}
        <Toaster/>
        </body>
        </html>
    );
}
