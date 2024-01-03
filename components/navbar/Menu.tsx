import { Bell, Clock3, Home, Settings, Users, Wallet } from "lucide-react";
import Link from "next/link";

const Menu = () => {
    const links = [
        {
            href: "/notification",
            icon: <Bell size="20" />,
        },
        {
            href: "/history-transaction",
            icon: <Clock3 size="20" />,
        },
        {
            href: "/user-management",
            icon: <Users size="20" />,
        },
        {
            href: "/balance",
            icon: <Wallet size="20" />,
        },
        {
            href: "/settings",
            icon: <Settings size="20" />,
        },
    ];
    return (
        <div className="flex flex-col gap-8 bg-[#F7F6FC] p-2 rounded-full items-center">
            <Link href="/">
                <div className="bg-[#545DE6] rounded-full p-2">
                    <Home color="white" size="20" />
                </div>
            </Link>
            {links.map((link) => {
                return (
                    <Link href={link.href} key={link.href}>
                        {link.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Menu;
