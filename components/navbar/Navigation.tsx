import { MessagesSquare, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Menu from "@/components/navbar/Menu";

const Navigation = () => {
    return (
        <div className="flex flex-col max-w-md min-h-screen justify-between items-center pt-4 pb-8">
            <div className="font-bold text-3xl">S.</div>
            <Button size="icon" className="bg-[#F9E0BF]">
                <MessagesSquare color="black" />
            </Button>
            <Menu />
            <div className="flex flex-col items-center gap-4">
                <Avatar>
                    <AvatarImage src="https://i.seadn.io/s/raw/files/cdae90961393621dacfc520bcfc5e744.png?auto=format&dpr=1&w=1000" />

                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <LogOut />
            </div>
        </div>
    );
};

export default Navigation;
