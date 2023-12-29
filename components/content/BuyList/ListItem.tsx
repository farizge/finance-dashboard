"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { useState } from "react";

type itemProps = {
    id: string;
    name: string;
    checked: boolean;
};
const ListItem = ({ ...props }: itemProps) => {
    const [isChecked, setIsChecked] = useState(props.checked);
    return (
        <div className="flex items-center justify-between bg-[#F7F6FC] p-2 gap-16 rounded-md">
            <div className="flex items-center gap-2">
                <Checkbox
                    id={props.id}
                    onChange={() => setIsChecked(!props.checked)}
                />
                <label htmlFor={props.id} className="text-sm font-semibold">
                    {props.name}
                </label>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MoreVertical size="16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ListItem;
