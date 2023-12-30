"use client";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const ChartAnalytics = () => {
    const data = [
        {
            name: "Done",
            value: 40,
        },
        {
            name: "In Progres",
            value: 20,
        },
        {
            name: "To Do",
            value: 25,
        },
    ];
    const COLORS = ["#515BE6", "#FBA90D", "#E0674E"];
    return (
        <PieChart width={350} height={200}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={80}
                startAngle={180}
                endAngle={0}
                fill="#82ca9d"
                label
                cx="45%"
                cy={130}
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default ChartAnalytics;
