import {agamaOptions, pendidikanTerakhirOptions, statusKontrakOptions, statusPernikahanOptions} from "@/data/options";

export const userInputFields = [
    {
        name: 'nama',
        type: 'text',
        label: 'Nama',
        placeholder: 'Masukan nama anda',
    },
    {
        name: 'no_hp',
        type: 'number',
        label: 'No. HP',
        placeholder: 'Masukan No. HP anda',
    },
    {
        name: 'nik',
        type: 'number',
        label: 'NIK',
        placeholder: 'Masukan NIK anda',
    },
    {
        name: 'tempat_lahir',
        type: 'text',
        label: 'Tempat Lahir',
        placeholder: 'Masukan tempat lahir anda',
    },
    {
        name: 'tgl_lahir',
        type: 'date',
        label: 'Tanggal Lahir',
        placeholder: 'Masukan tanggal lahir anda',
    },
    {
        name: 'alamat_ktp',
        type: 'text',
        label: 'Alamat KTP',
        placeholder: 'Masukkan alamat KTP anda',
    },
    {
        name: 'domisili',
        type: 'text',
        label: 'Domisili',
        placeholder: 'Masukan domisili anda',
    },
    {
        name: 'agama',
        type: 'select',
        label: 'Agama',
        placeholder: 'Masukan agama anda',
        selectOptions: agamaOptions
    },
    {
        name: 'kontak_darurat',
        type: 'number',
        label: 'Kontak Darurat',
        placeholder: 'Masukan kontak darurat anda',
    },
    {
        name: 'mcu',
        type: 'text',
        label: 'MCU',
        placeholder: 'Masukan MCU anda',
    },
    {
        name: 'no_rek_bca',
        type: 'number',
        label: 'No. Rek BCA',
        placeholder: 'Masukan No. Rek BCA anda',
    },
    {
        name: 'pendidikan_terakhir',
        type: 'select',
        label: 'Pendidikan Terakhir',
        placeholder: 'Masukan pendidikan terakhir anda',
        selectOptions: pendidikanTerakhirOptions
    },
    {
        name: 'tgl_bergabung',
        type: 'date',
        label: 'Tanggal Bergabung',
        placeholder: 'Masukan tanggal bergabung anda',
    },
    {
        name: 'nrp',
        type: 'text',
        label: 'NRP',
        placeholder: 'Masukan NRP anda',
    },
    {
        name: 'no_kontrak',
        type: 'number',
        label: 'No. Kontrak',
        placeholder: 'Masukan No. Kontrak anda',
    },
    {
        name: 'status_kontrak',
        type: 'select',
        label: 'Status Kontrak',
        placeholder: 'Masukan status kontrak anda',
        selectOptions: statusKontrakOptions
    },
    {
        name: 'lokasi_site',
        type: 'text',
        label: 'Lokasi Site',
        placeholder: 'Masukan lokasi site anda',
    },
    {
        name: 'status_pernikahan',
        type: 'select',
        label: 'Status Pernikahan',
        placeholder: 'Masukan status pernikahan anda',
        selectOptions: statusPernikahanOptions
    },
]