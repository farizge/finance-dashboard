"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const AddItem = () => {
    const { pending } = useFormStatus();

    return (
        <Button size="sm" disabled={pending} className="w-full">
            {pending ? <Loader2 className="animate-spin" /> : "Add Item"}
        </Button>
    );
};

export default AddItem;
