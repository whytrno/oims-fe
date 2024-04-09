"use client";

import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import Cookies from "js-cookie";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const AuthComponent: React.FC<P> = (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = Cookies.get("token");
            const user = Cookies.get("user");

            let parsedUser = null;
            if (user) {
                parsedUser = JSON.parse(user);
            }

            if (!token || !user) {
                router.push("/login");
            } else if (parsedUser && parsedUser.role === "user") {
                router.push("/profile");
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

    return AuthComponent;
};

export default withAuth;
