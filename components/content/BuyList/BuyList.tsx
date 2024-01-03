import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import { Item } from "@/typing";
import { addItem, getData } from "@/actions/buyItem";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BuyList = async () => {
    const data: Item[] = await getData();
    return (
        <Card className=" flex-1 p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <CardTitle className="flex-1">List item to buy</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" className="flex gap-1">
                            <Plus size="16" />
                            Add Item
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-4">
                        <form
                            id="add-item"
                            action={addItem}
                            className="flex flex-col gap-4"
                        >
                            <Input
                                id="itemName"
                                placeholder="Add your item"
                                name="itemName"
                                type="text"
                            />
                            <AddItem />
                        </form>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {data?.map((item) => {
                    const { itemID, itemName, isChecked } = item;
                    return (
                        <ListItem
                            key={itemID}
                            itemID={itemID}
                            itemName={itemName}
                            isChecked={isChecked}
                        ></ListItem>
                    );
                })}
            </div>
        </Card>
    );
};

export default BuyList;
