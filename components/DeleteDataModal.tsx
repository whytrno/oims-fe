import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {deleteUser, getUser} from "@/api/users";
import useUsersStore from "@/zustand/usersStore";

const DeleteDataModal = ({id}: { id: number }) => {
    const {setUsersData} = useUsersStore();

    const handleDelete = async () => {
        toast("Deleting data...");

        await deleteUser(id)
            .then((response) => {
                toast(response);
                getUser().then((data) => {
                    setUsersData(data);
                });
            })
            .catch((error) => {
                toast(error);
            })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" size="sm" className="text-red-600">
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete data?</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" onClick={() => handleDelete()}>Delete data</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteDataModal