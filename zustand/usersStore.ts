import {create} from "zustand";

interface DataStore {
    users: any;
    setUsersData: (users: any) => void;
}

const useUsersStore = create<DataStore>((set) => ({
    users: null,
    setUsersData: (users) => set({users}),
}));

export default useUsersStore;