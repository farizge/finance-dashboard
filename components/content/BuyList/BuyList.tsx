import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ListItem from "./ListItem";
import { data } from "./data";

const BuyList = () => {
    return (
        <Card className=" flex-1 p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <CardTitle className="flex-1">List item to buy</CardTitle>
                <Button variant="outline" className="flex gap-1">
                    <Plus size="16" />
                    Add Item
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {data?.map((item) => {
                    const { id, name, isChecked } = item;
                    return (
                        <ListItem
                            key={id}
                            id={id}
                            name={name}
                            checked={isChecked}
                        ></ListItem>
                    );
                })}
            </div>
        </Card>
    );
};

export default BuyList;
