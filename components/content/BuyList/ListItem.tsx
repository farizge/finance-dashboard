import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Item } from "@/typing";
import { MoreVertical } from "lucide-react";
import DeleteItem from "./DeleteItem";

const ListItem = ({ ...props }: Item) => {
    return (
        <div className="flex items-center justify-between bg-[#F7F6FC] p-2 gap-16 rounded-md">
            <div className="flex items-center gap-2">
                <Checkbox
                    id={props.itemID}
                    checked={props.isChecked === true}
                />
                <label htmlFor={props.itemID} className="text-sm font-semibold">
                    {props.itemName}
                </label>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MoreVertical size="16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="p-0">
                        <DeleteItem itemID={props.itemID} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ListItem;
