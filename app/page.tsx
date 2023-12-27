import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="py-4 px-8">
            <header className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">Hello, Jhon .D</h1>
                    <p>View and control your finance here!</p>
                </div>
                <Button size="icon" className="bg-white">
                    <Search color="black" />
                </Button>
            </header>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Balance Statistic</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}
