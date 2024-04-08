"use client";

import DataTable from "@/components/datatable/DataTable";
import DataKaryawanColumnHeader from "@/components/datatable/DataKaryawanColumnHeader";
import PageTitle from "@/components/PageTitle";
import {Button} from "@/components/ui/button";
import {PlusCircleIcon} from "lucide-react";
import {useEffect} from "react";
import {Skeleton} from "@/components/ui/skeleton";
import {getUser} from "@/api/users";
import useUsersStore from "@/zustand/usersStore";

const KaryawanPage = () => {
    const {users, setUsersData} = useUsersStore();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser();
            setUsersData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(users)
    }, [users])

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">

            <div className="flex justify-between items-center">
                <PageTitle title={"Dashboard"}/>
                <Button size="sm" className="h-7 gap-1">
                    <PlusCircleIcon className="h-3.5 w-3.5"/>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
            </div>
            {
                users ? (
                    <DataTable columns={DataKaryawanColumnHeader} data={users}/>
                ) : (
                    <Skeleton className="h-full"/>
                )
            }
        </main>
    );
};

export default KaryawanPage;