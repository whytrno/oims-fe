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
import React, {useEffect, useState} from "react";
import {UserInfoType} from "@/types/users";
import Link from "next/link";

const UserNavMenu = () => {
    const [user, setUser] = useState<UserInfoType>({
        user_id: 0,
        nama: "",
        role: "",
        role_id: 0,
        foto: "",
        email: "",
    });

    useEffect(() => {
        const fetchUser = () => {
            const userCookie = Cookies.get("user");
            if (userCookie) {
                const parsedUser = JSON.parse(userCookie);
                setUser(parsedUser);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        window.location.href = "/login";
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex gap-2 items-center">
                    <UserInfo {...user}/>

                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5"/>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    <Link href="/profile">My Account</Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNavMenu;