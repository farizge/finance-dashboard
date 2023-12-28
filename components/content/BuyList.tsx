import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const BuyList = () => {
    return (
        <Card className=" flex-1">
            <div className="flex p-4 items-center justify-between">
                <CardTitle className="flex-1">List item to buy</CardTitle>
                <Button variant="outline" className="flex gap-1">
                    <Plus size="16" />
                    Add Item
                </Button>
            </div>
        </Card>
    );
};

export default BuyList;
