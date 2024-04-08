import {HomeIcon} from "lucide-react";
import {PersonIcon} from "@radix-ui/react-icons";

const SidebarItems = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <HomeIcon/>,
    },
    {
        title: 'Data Karyawan',
        path: '/karyawan',
        icon: <PersonIcon/>,
    },
];

export default SidebarItems;