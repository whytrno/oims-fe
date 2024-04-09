import React from "react";
import {Skeleton} from "@/components/ui/skeleton";
import {UserInfoType} from "@/types/users";

const UserInfo: React.FC<UserInfoType> = ({nama, role}) => {
    return (
        <div className="flex flex-col gap-1 items-end capitalize">
            {nama ? (
                <>
                    <p>{nama}</p>
                    <p className="text-xs">{role}</p>
                </>
            ) : (
                <>
                    <Skeleton className="h-4 w-20"/>
                    <Skeleton className="h-3 w-14"/>
                </>
            )}
        </div>
    );
};


export default UserInfo;
// export default dynamic(() => Promise.resolve(UserInfo), {
//     ssr: false
// })