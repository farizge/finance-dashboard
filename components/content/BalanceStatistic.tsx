import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import coin from "@/assets/coin.png";
import ChartBarStatistic from "@/components/charts/ChartBarStatistic";

const BalanceStatistic = () => {
    return (
        <Card className="flex-1">
            <div className="flex max-w-full p-4 items-center">
                <CardTitle className="flex-1">Balance Statistic</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
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
            <CardContent className="flex gap-4 items-center justify-around">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold">$1564</h1>
                    <div className="flex max-w-28 gap-1">
                        <Image src={coin} alt="coin" width={40} />
                        <p className="text-gray-500 dark:text-white text-xs">
                            Your Total Balance
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <ChartBarStatistic />
                </div>
            </CardContent>
        </Card>
    );
};

export default BalanceStatistic;
