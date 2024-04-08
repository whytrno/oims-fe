import {create} from "zustand";

interface UserProfile {
    id: string;
    email: string;
    role_id: string;
    created_at: string;
    updated_at: string;
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

interface ProfileStore {
    user: UserProfile | null;
    setProfile: (user: UserProfile) => void;
}

const useProfileStore = create<ProfileStore>((set) => ({
    user: null,
    setProfile: (user) => set({user}),
}));

export default useProfileStore;