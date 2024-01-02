"use client";

import { revalidateData } from "@/actions/buyItem";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DeleteItem = ({ itemID }: any) => {
    const handleDelete = async () => {
        await fetch(
            `https://659407101493b0116069c278.mockapi.io/api/sample/buylist/${itemID}`,
            {
                method: "DELETE",
            }
        );
        revalidateData();
        toast("Item Deleted");
    };
    return (
        <Button
            variant="ghost"
            className="w-full text-red-600 hover:text-red-600 hover:bg-red-200"
            size="sm"
            onClick={handleDelete}
        >
            Delete
        </Button>
    );
};

export default DeleteItem;
