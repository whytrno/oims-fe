"use client";

import PageTitle from "@/components/PageTitle";
import {Button} from "@/components/ui/button";
import {PlusCircleIcon} from "lucide-react";
import {useEffect, useState} from "react";
import {Skeleton} from "@/components/ui/skeleton";
import {getUser} from "@/api/users";
import useUsersStore from "@/zustand/usersStore";
import {toast} from "sonner";
import withAuth from "@/utils/withAuth";
import DataTable from "@/components/datatable/main/DataTable";
import DataKaryawanColumnHeader from "@/components/datatable/DataKaryawanColumnHeader";
import {UserInfoType} from "@/types/users";
import Cookies from "js-cookie";

const KaryawanPage = () => {
    const {users, setUsersData} = useUsersStore();
    const [user, setUser] = useState<UserInfoType | null>(null);
    const [hideColumns, setHideColumns] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await getUser()
                .then((data) => {
                    setUsersData(data)
                })
                .catch((error) => {
                    toast(error)
                })
        };
        const fetchUser = () => {
            const userCookie = Cookies.get("user");
            if (userCookie) {
                const parsedUser = JSON.parse(userCookie);

                if (parsedUser.role !== "admin") {
                    setHideColumns(["email", "password", "actions"])
                }

                setUser(parsedUser);
            }
        };

        fetchUser();
        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-between items-center">
                <PageTitle title={"Karyawan"}/>
                <Button size="sm" className="h-7 gap-1">
                    <PlusCircleIcon className="h-3.5 w-3.5"/>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Data
                  </span>
                </Button>
            </div>
            {
                users ? (
                    <DataTable columns={DataKaryawanColumnHeader} data={users} hideColumns={hideColumns}/>
                ) : (
                    <Skeleton className="h-full"/>
                )
            }
        </>
    );
};

export default withAuth(KaryawanPage);