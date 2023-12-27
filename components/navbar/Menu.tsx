import { Bell, Clock3, Home, Settings, Users, Wallet } from "lucide-react";
import Link from "next/link";

const Menu = () => {
    return (
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
    );
};

export default Menu;
