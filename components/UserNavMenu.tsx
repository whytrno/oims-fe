import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {CircleUser} from "lucide-react";
import Cookies from "js-cookie";
import UserInfo from "@/components/UserInfo";
import React from "react";


const UserNavMenu = () => {
    let user = Cookies.get("user");
    if (typeof user === "string") {
        user = JSON.parse(user);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex gap-2 items-center">
                    <UserInfo user={user}/>
                    {/*{*/}
                    {/*    user ? (*/}
                    {/*        <UserInfo user={user}/>*/}
                    {/*    ) : (*/}
                    {/*        <div className="flex flex-col gap-2 items-end">*/}
                    {/*            <Skeleton className="h-4 w-20"/>*/}
                    {/*            <Skeleton className="h-3 w-14"/>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}

                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5"/>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNavMenu;