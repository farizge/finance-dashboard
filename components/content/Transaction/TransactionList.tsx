import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Transaction } from "@/typing";
import { MoreVertical } from "lucide-react";

const TransactionList = ({ ...props }: Transaction) => {
    return (
        <div className="flex justify-between items-center border-b border-zinc-300 p-2">
            <div className="flex gap-2 items-center flex-1">
                <Avatar>
                    <AvatarImage src={props.avatar} />
                    <AvatarFallback>UT</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-semibold">{props.username}</p>
                    <p className="text-xs">
                        {props.transaction_date?.slice(0, 10)}
                    </p>
                </div>
            </div>
            <p className="font-bold mr-4 text-[#515BE6]">${props.amount}</p>
            <MoreVertical size="20" />
        </div>
    );
};

export default TransactionList;
