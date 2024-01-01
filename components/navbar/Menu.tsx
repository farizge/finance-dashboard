import { Bell, Clock3, Home, Settings, Users, Wallet } from "lucide-react";
import Link from "next/link";

const Menu = () => {
    const links = [
        {
            href: "/notification",
            icon: <Bell />,
        },
        {
            href: "/history-transaction",
            icon: <Clock3 />,
        },
        {
            href: "/user-management",
            icon: <Users />,
        },
        {
            href: "/balance",
            icon: <Wallet />,
        },
        {
            href: "/settings",
            icon: <Settings />,
        },
    ];
    return (
        <div className="flex flex-col gap-8 bg-[#F7F6FC] p-2 rounded-full items-center">
            <Link href="/">
                <div className="bg-[#545DE6] rounded-full p-2">
                    <Home color="white" />
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
