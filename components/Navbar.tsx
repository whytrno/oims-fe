import BreadcrumbNav from "@/components/BreadcrumbNav";
import UserNavMenu from "@/components/UserNavMenu";
import React from "react";
import MobileSidebar from '@/components/MobileSidebar';

const Navbar = () => {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <MobileSidebar />
            <div className="w-full flex-1">
                {/* <BreadcrumbNav /> */}
            </div>
            <UserNavMenu />
        </header>
    )
}

export default Navbar