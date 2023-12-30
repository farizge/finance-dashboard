import ChartAnalytics from "@/components/charts/ChartAnalytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

const Analytics = () => {
    return (
        <Card className="flex-1 p-4 max-w-[35%] flex flex-col gap-2">
            <CardHeader>
                <CardTitle>Analitycs</CardTitle>
                <MoreVertical size="20" />
            </CardHeader>
            <CardContent className="">
                <ChartAnalytics />
            </CardContent>
        </Card>
    );
};

export default Analytics;
