import Logo from "@/components/navbar/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="py-4 px-8 flex flex-col gap-8">
            <header className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">Hello, Jhon .D</h1>
                    <p>View and control your finance here!</p>
                </div>
                <Button size="icon" className="bg-white">
                    <Search color="black" />
                </Button>
            </header>
            <div className="flex gap-4 max-w-full">
                <Card className="flex-1">
                    <div className="flex max-w-full p-4 items-center">
                        <CardTitle className="flex-1">
                            Balance Statistic
                        </CardTitle>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-4"
                                >
                                    Filter
                                    <ChevronDown size="16" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Month</DropdownMenuItem>
                                <DropdownMenuItem>Week</DropdownMenuItem>
                                <DropdownMenuItem>Day</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </Card>
                <Card className="w-[45%] bg-[#545DE6]">
                    <CardHeader>
                        <CardTitle>
                            <Logo />
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}
