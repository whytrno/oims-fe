'use client'

import PageTitle from "@/components/PageTitle";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {z} from "zod";
import {
    agamaOptions,
    mcuOptions,
    pendidikanTerakhirOptions,
    statusKontrakOptions,
    statusPernikahanOptions,
} from "@/data/options";
import {useEffect, useState} from "react";
import {getUserById, updateUserById} from "@/api/users";
import {toast} from "sonner";
import {ProfileType, UserType} from "@/types/users";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import {useRouter} from "next/navigation";
import FormFieldInput from "@/components/FormFieldInput";
import {userInputFields} from "@/data/UserInputFields";
import {Skeleton} from "@/components/ui/skeleton";
import {Input} from "@/components/ui/input";

const formSchema = z.object({
    nama: z.string().nullable(),
    no_hp: z.coerce.number().nullable(),
    nik: z.coerce.number().positive().gt(1000000000000000).lt(9999999999999999).nullable(),
    tempat_lahir: z.string().nullable(),
    anak: z.coerce.number().nullable().default(0),
    tgl_lahir: z.coerce.date().nullable(),
    alamat_ktp: z.string().nullable(),
    domisili: z.string().nullable(),
    agama: z.enum(agamaOptions).nullable(),
    status_pernikahan: z.enum(statusPernikahanOptions).nullable(),
    kontak_darurat: z.coerce.number().nullable(),
    mcu: z.enum(mcuOptions).nullable(),
    no_rek_bca: z.coerce.number().nullable(),
    pendidikan_terakhir: z.enum(pendidikanTerakhirOptions).nullable(),
    tgl_bergabung: z.coerce.date().nullable(),
    nrp: z.string().nullable(),
    no_kontrak: z.coerce.number().nullable(),
    status_kontrak: z.enum(statusKontrakOptions).nullable(),
    lokasi_site: z.string().nullable(),
})

const KaryawanDetailPage = ({params}: {
    params: {
        id: number
    }
}) => {
    const router = useRouter()

    const id = params.id
    const [user, setUser] = useState<UserType>()
    const [isMarried, setIsMarried] = useState<boolean>(false)
    const [avatarFallback, setAvatarFallback] = useState<string>("")
    const [fotoInput, setFotoInput] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setFotoInput(file);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getUserById(id)
                .then((data) => {
                    setUser(data)
                })
                .catch((error) => {
                    toast(error)
                    router.push("/dashboard/karyawan")
                })
        };
        fetchData();
    }, [id]);

    const form = useForm<ProfileType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: user?.profile?.nama,
            no_hp: user?.profile?.no_hp,
            nik: user?.profile?.nik,
            tempat_lahir: user?.profile?.tempat_lahir,
            anak: user?.profile?.anak,
            tgl_lahir: user?.profile?.tgl_lahir,
            alamat_ktp: user?.profile?.alamat_ktp,
            domisili: user?.profile?.domisili,
            agama: user?.profile?.agama,
            status_pernikahan: user?.profile?.status_pernikahan,
            kontak_darurat: user?.profile?.kontak_darurat,
            mcu: user?.profile?.mcu,
            no_rek_bca: user?.profile?.no_rek_bca,
            pendidikan_terakhir: user?.profile?.pendidikan_terakhir,
            tgl_bergabung: user?.profile?.tgl_bergabung,
            nrp: user?.profile?.nrp,
            no_kontrak: user?.profile?.no_kontrak,
            status_kontrak: user?.profile?.status_kontrak,
            lokasi_site: user?.profile?.lokasi_site,
        },
    })

    useEffect(() => {
        if (user) {
            Object.keys(user.profile).forEach((key) => {
                // @ts-ignore
                form.setValue(key as keyof ProfileType, user.profile[key])
            })
        }

        if (user && user.profile) {
            const fallback = user.profile.nama
                .split(" ")
                .map(word => word.charAt(0).toUpperCase())
                .join("");

            setAvatarFallback(fallback)
        }

    }, [form, user]);

    useEffect(() => {
        if (form.watch("status_pernikahan") === "menikah") {
            setIsMarried(true);
        } else {
            setIsMarried(false);
        }

    }, [form.watch("status_pernikahan")]);

    function handleSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();

        if (fotoInput && fotoInput !== null) {
            formData.append("foto", fotoInput);
        }

        Object.entries(values).forEach(([key, value]) => {
            if (value !== null) {
                formData.append(key, value as string);
            }
        });
        const updateUser = async () => {
            // @ts-ignore
            await updateUserById(id, formData)
                .then((response) => {
                    console.log(response)
                    toast(response)
                })
                .catch((error) => {
                    console.log(error)
                    toast(error)
                })
        }
        updateUser()
    }

    return (
        <>
            <div className="flex justify-between items-center">
                <PageTitle title={"Karyawan Detail"}/>
            </div>

            <div className="border rounded-lg h-full p-5 space-y-5">
                <div className="flex gap-3 items-center">
                    {
                        user && user.profile ? (
                            <>
                                <Avatar className="size-14">
                                    <AvatarImage src={user.profile.foto} alt="Foto"/>
                                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                                </Avatar>

                                <div className="capitalize">
                                    <h1 className="text-lg font-semibold">{user.profile.nama}</h1>
                                    <p className="text-sm text-gray-500">{user.role.name}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Skeleton className="size-14 rounded-full"/>
                                <div className="grid gap-2">
                                    <Skeleton className="w-20 h-3"/>
                                    <Skeleton className="w-14 h-3"/>
                                </div>
                            </>
                        )
                    }
                </div>
                <Separator/>
                {
                    user && user.profile ? (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8"
                                  encType="multipart/form-data">
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="grid w-full items-center gap-2">
                                        <label htmlFor="upload-photo"
                                               className="block text-sm font-medium text-gray-700">Unggah Foto</label>
                                        <Input id="upload-photo" className="w-full" type="file"
                                               onChange={handleFileChange}
                                               accept="image/*"
                                               name="foto"/>
                                    </div>
                                    {
                                        userInputFields.map((field, index) => (
                                            // @ts-ignore
                                            <FormFieldInput key={index} control={form.control} type={field.type}
                                                            label={field.label}
                                                            name={field.name}
                                                // @ts-ignore
                                                            selectOptions={field.selectOptions}
                                                            placeholder={field.placeholder}/>
                                        ))
                                    }
                                    {
                                        isMarried && (
                                            // @ts-ignore
                                            <FormFieldInput control={form.control} type="number" label="Jumlah Anak"
                                                            name="anak"
                                                            placeholder="Jumlah Anak"/>
                                        )
                                    }
                                </div>
                                <Button type="submit" className="w-full">Submit</Button>
                            </form>
                        </Form>
                    ) : (
                        <Skeleton className="h-full w-full"/>
                    )
                }
            </div>
        </>
    )
}

export default KaryawanDetailPage