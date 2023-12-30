import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";

type transactionList = {
    id: string;
    name: string;
    amount: string;
    date: string;
    avatar: string;
};

const TransactionList = ({ ...props }: transactionList) => {
    return (
        <div className="flex justify-between items-center border-b border-zinc-300 p-2">
            <div className="flex gap-2 items-center flex-1">
                <Avatar>
                    <AvatarImage src={props.avatar} />
                    <AvatarFallback>UT</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-semibold">{props.name}</p>
                    <p className="text-xs">{props.date}</p>
                </div>
            </div>
            <p className="font-bold mr-4">{props.amount}</p>
            <MoreVertical size="20" />
        </div>
    );
};

export default TransactionList;
