import Analytics from "@/components/content/Analytics/Analytics";
import BalanceStatistic from "@/components/content/BalanceStatistic/BalanceStatistic";
import BuyList from "@/components/content/BuyList/BuyList";
import CreditCard from "@/components/content/CreditCard/CreditCard";
import QuickChat from "@/components/content/QuickChat/QuickChat";
import Transaction from "@/components/content/Transaction/Transaction";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Home() {
    return (
        <div className="py-4 px-8 flex flex-col gap-4">
            <header className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">Hello, Jhon .D</h1>
                    <p>View and control your finance here!</p>
                </div>
                <Button size="icon" className="bg-white">
                    <Search color="black" />
                </Button>
            </header>
            <div className="flex gap-4 max-w-full">
                <BalanceStatistic />
                <CreditCard />
            </div>
            <div className="flex gap-4 max-w-full">
                <BuyList />
                <QuickChat />
            </div>
            <div className="flex gap-4 max-w-full">
                <Transaction />
                <Analytics />
            </div>
        </div>
    );
}
