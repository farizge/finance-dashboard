import {
    MessagesSquare,
    LogOut,
    Home,
    Bell,
    Clock3,
    Users,
    Wallet,
    Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarImg from "../public/avatar.png";
import Link from "next/link";
const Navigation = () => {
    return (
        <div className="flex flex-col max-w-md min-h-screen justify-between items-center pt-4 pb-8">
            <div className="font-bold text-3xl">S.</div>
            <Button size="icon" className="bg-[#F9E0BF]">
                <MessagesSquare color="black" />
            </Button>
            <div className="flex flex-col gap-8 bg-[#F7F6FC] p-2 rounded-full items-center">
                <Link href="/">
                    <div className="bg-[#545DE6] rounded-full p-2">
                        <Home color="white" />
                    </div>
                </Link>
                <Bell />
                <Clock3 />
                <Users />
                <Wallet />
                <Settings />
            </div>
            <div className="flex flex-col items-center gap-4">
                <Avatar>
                    <AvatarImage src="../public/avatar.png" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <LogOut />
            </div>
        </div>
    );
};

export default Navigation;
