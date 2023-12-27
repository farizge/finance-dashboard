import { MessagesSquare, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/navbar/Logo";
import Menu from "@/components/navbar/Menu";
const Navigation = () => {
    return (
        <div className="flex flex-col max-w-md min-h-screen justify-between items-center pt-4 pb-8">
            <Logo />
            <Button size="icon" className="bg-[#F9E0BF]">
                <MessagesSquare color="black" />
            </Button>
            <Menu />
            <div className="flex flex-col items-center gap-4">
                <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/300" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <LogOut />
            </div>
        </div>
    );
};

export default Navigation;
