export type agamaType = 'islam' | 'kristen' | 'katolik' | 'hindu' | 'budha' | 'konghucu';
export type statusPernikahanType = 'belum menikah' | 'menikah' | 'cerai';
export type statusKontrakType = 'aktif' | 'tidak aktif';
export type pendidikanTerakhirType = 'sd' | 'smp' | 'sma' | 'd3' | 's1' | 's2' | 's3';
export type mcuType = 'ada' | 'tidak ada';

export interface UserInfoType {
    user_id: number;
    role_id: number;
    email: string;
    foto: string;
    nama: string;
    role: string;
}

export interface RoleType {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};

export interface ProfileType {
    id: number;
    user_id: number;
    foto: string;
    nama: string;
    no_hp: number;
    nik: number;
    tempat_lahir: string;
    tgl_lahir: Date;
    alamat_ktp: string;
    domisili: string;
    agama: agamaType;
    status_pernikahan: statusPernikahanType;
    anak: number;
    kontak_darurat: number;
    mcu: mcuType;
    no_rek_bca: number;
    pendidikan_terakhir: pendidikanTerakhirType;
    tgl_bergabung: Date;
    nrp: string;
    no_kontrak: number;
    status_kontrak: statusKontrakType;
    lokasi_site: string;
    created_at: string;
    updated_at: string;
};

export interface UserType {
    id: number;
    email: string;
    role_id: number;
    created_at: string;
    updated_at: string;
    password: string;
    profile: ProfileType
    role: RoleType
}