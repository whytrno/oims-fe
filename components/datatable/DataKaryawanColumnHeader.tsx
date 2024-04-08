"use client";

import {ColumnDef} from "@tanstack/react-table";
import {DataTableColumnHeader} from "@/components/datatable/DataTableColumnHeader";
import {TableCell} from "@/components/ui/table";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DeleteDataModal from "@/components/DeleteDataModal";

export type Payment = {
    id: string;
    email: string;
    role_id: string;
    created_at: string;
    updated_at: string;
    password: string;
    profile: {
        id: string;
        user_id: string;
        foto: string;
        nama: string;
        no_hp: string;
        nik: string;
        tempat_lahir: string;
        tgl_lahir: string;
        alamat_ktp: string;
        domisili: string;
        agama: string;
        status_pernikahan: string;
        anak: string;
        kontak_darurat: string;
        mcu: string;
        no_rek_bca: string;
        pendidikan_terakhir: string;
        tgl_bergabung: string;
        nrp: string;
        no_kontrak: string;
        status_kontrak: string;
        lokasi_site: string;
        created_at: string;
        updated_at: string;
    };
    role: {
        id: string;
        name: string;
        created_at: string;
        updated_at: string;
    };
}

export const DataKaryawanColumnHeader: ColumnDef<Payment>[] = [
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
            const foto = cell.getValue();

            return (
                <TableCell>
                    <Avatar>
                        <AvatarImage src={foto} alt="Foto"/>
                        <AvatarFallback>FT</AvatarFallback>
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
    },
    {
        accessorKey: "profile.nik",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="NIK"/>
        ),
    },
    {
        accessorKey: "profile.tempat_lahir_tanggal_lahir",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Tempat & Tanggal Lahir"/>
        ),
        cell: ({cell}) => {
            const {profile} = cell.row.original;
            const tempatLahir = profile.tempat_lahir ?? "";
            const tanggalLahir = profile.tgl_lahir ?? "";
            const tempatTanggalLahir = `${tempatLahir}, ${tanggalLahir}`;
            if (!tempatLahir && !tanggalLahir) return <div></div>;
            return <div>{tempatTanggalLahir}</div>;
        },
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
            const id: string = cell.row.original.id;

            return (
                <div className="">
                    <Button variant="link" size="sm">
                        <Link href={"/"}>Edit</Link>
                    </Button>

                    <DeleteDataModal id={id}/>
                </div>
            );
        },
    }
];

export default DataKaryawanColumnHeader;