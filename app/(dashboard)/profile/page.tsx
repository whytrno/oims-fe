'use client'

import KaryawanDetailPage from "@/app/(dashboard)/karyawan/[id]/page";
import Cookies from "js-cookie";
import withAuth from "@/utils/withAuth";
import {useEffect, useState} from "react";
import {UserInfoType} from "@/types/users";

const ProfilePage = () => {
    const [user, setUser] = useState<UserInfoType | null>(null);

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

    return (
        <>
            {user && user.user_id && <KaryawanDetailPage params={{id: user.user_id}}/>}
        </>
    );
}

export default withAuth(ProfilePage);
