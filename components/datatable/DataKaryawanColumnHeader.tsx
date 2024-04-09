"use client";

import {AccessorKeyColumnDef} from "@tanstack/react-table";
import {DataTableColumnHeader} from "@/components/datatable/main/DataTableColumnHeader";
import {TableCell} from "@/components/ui/table";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DeleteDataModal from "@/components/DeleteDataModal";
import {UserType} from "@/types/users";

export const DataKaryawanColumnHeader: AccessorKeyColumnDef<UserType>[] = [
    {
        accessorKey: "email",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Email"/>
        ),
    },
    {
        accessorKey: "password",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Password"/>
        ),
    },
    {
        accessorKey: "profile.foto",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Foto"/>
        ),
        cell: (cell) => {
            const {profile} = cell.row.original;
            const fotoString: string | undefined = typeof profile?.foto === 'string' ? profile?.foto : undefined;
            const fallback = profile?.nama
                .split(" ")
                .map(word => word.charAt(0).toUpperCase())
                .join("");

            return (
                <TableCell>
                    <Avatar>
                        <AvatarImage src={fotoString} alt="Foto"/>
                        <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                </TableCell>
            );
        }
    },
    {
        accessorKey: "profile.nama",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Nama"/>
        ),
        cell: (cell) => {
            const {id, profile} = cell.row.original;
            return (
                <Button variant="link">
                    <Link href={`/karyawan/${id}`}>
                        {profile?.nama}
                    </Link>
                </Button>
            )
        }
    },
    {
        accessorKey: "profile.nik",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="NIK"/>
        ),
    },
    {
        accessorKey: "profile.alamat_ktp",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Alamat"/>
        ),
    },
    {
        accessorKey: "profile.lokasi_site",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Lokasi Site"/>
        ),
    },
    {
        accessorKey: "actions",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Actions"/>
        ),
        cell: ({cell}) => {
            const {id} = cell.row.original;

            return (
                <div className="">
                    <Button variant="link" size="sm">
                        <Link href={`/karyawan/${id}`}>Edit</Link>
                    </Button>

                    <DeleteDataModal id={id}/>
                </div>
            );
        },
    }
];

export default DataKaryawanColumnHeader;