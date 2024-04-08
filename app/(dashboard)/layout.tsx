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
                {children}
            </div>
        </div>
    );
};

export default withAuth(DashboardLayout);