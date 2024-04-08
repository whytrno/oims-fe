import React from "react";
import dynamic from "next/dynamic";

const Skeleton = dynamic(() => import("@/components/ui/skeleton"), {
    ssr: false,
});

interface UserInfoProps {
    user: {
        nama?: string;
        role?: string;
    } | null;
}

const UserInfo: React.FC<UserInfoProps> = ({user}) => {
    return (
        <div className="flex flex-col gap-1 items-end">
            {user && user.nama ? (
                <>
                    <p>{user.nama}</p>
                    <p className="text-xs">{user.role}</p>
                </>
            ) : (
                <div className="flex flex-col items-end gap-2">
                    <Skeleton className="h-4 w-20"/>
                    <Skeleton className="h-3 w-14"/>
                </div>
            )}
        </div>
    );
};

export default dynamic(() => Promise.resolve(UserInfo), {
    ssr: false
})