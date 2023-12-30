import { Card, CardContent, CardTitle } from "@/components/ui/card";
import TransactionList from "./TransactionList";
import { data } from "./data";

const Transaction = () => {
    return (
        <Card className="flex flex-col gap-2 flex-1 p-4 max-h-72 overflow-scroll overflow-x-hidden">
            <CardTitle className="border-zinc-300 border-b py-2">
                Last Transaction
            </CardTitle>
            <CardContent>
                {data?.map((item) => {
                    return <TransactionList key={item.id} {...item} />;
                })}
            </CardContent>
        </Card>
    );
};

export default Transaction;
