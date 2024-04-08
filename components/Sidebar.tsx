'use client'

import Link from "next/link";
import Image from "next/image";
import SidebarItems from "@/data/SidebarItems";
import React from "react";
import {cn} from "@/lib/utils";
import {usePathname} from 'next/navigation'

const Sidebar = () => {
    const pathName = usePathname();

    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-4">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Image src={"/logo.png"} alt={"logo"} width={42} height={42}/>
                        <span className="">OimsApps</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid gap-2 items-start px-2 text-sm font-medium lg:px-4">
                        {
                            SidebarItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    className={cn('flex items-center gap-3 rounded-lg px-5 py-3 transition-all', {
                                        'text-muted-foreground hover:text-primary': item.path !== pathName,
                                        'bg-primary text-white': item.path === pathName,
                                    })}
                                >
                                    {React.cloneElement(item.icon, {className: 'h-4 w-4'})}
                                    {item.title}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;