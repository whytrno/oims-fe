import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import SidebarItems from "@/data/SidebarItems";
import React from "react";
import Image from "next/image";

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                    >
                        <Image src={"/logo.png"} alt={"logo"} width={42} height={42} />
                        <span className="sr-only">OimsApps</span>
                    </Link>
                    {
                        SidebarItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                {React.cloneElement(item.icon, { className: 'h-5 w-5' })}
                                {item.title}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar