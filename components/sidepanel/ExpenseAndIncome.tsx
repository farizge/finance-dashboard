import { Card, CardContent, CardTitle } from "@/components/ui/card";

const ExpenseAndIncome = () => {
    return (
        <Card className="min-w-80">
            <CardTitle>Expense And Income</CardTitle>
            <CardContent className="flex justify-between items-center">
                <div>
                    <p>Expense</p>
                    <p className="text-3xl font-bold text-[#515BE6]">75%</p>
                    <p>$5.653</p>
                </div>
                <p className="text-2xl">VS</p>
                <div>
                    <p>Income</p>
                    <p className="text-3xl font-bold text-[#FBA90D]">25%</p>
                    <p>$2.656</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default ExpenseAndIncome;
