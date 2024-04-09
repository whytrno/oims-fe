"use client";

import Sidebar from "@/components/Sidebar";
import React from "react";
import Navbar from "@/components/Navbar";
import withAuth from "@/utils/withAuth";

const DashboardLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar/>
            <div className="flex flex-col">
                <Navbar/>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-screen lg:w-full">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default withAuth(DashboardLayout);