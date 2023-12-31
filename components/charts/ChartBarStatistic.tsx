"use client";

import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const ChartBarStatistic = () => {
    const data = [
        {
            month: "Oct",
            income: 1500,
            expense: 800,
        },
        {
            month: "Nov",
            income: 1200,
            expense: 900,
        },
        {
            month: "Dec",
            income: 1500,
            expense: 1100,
        },
        {
            month: "Jan",
            income: 1600,
            expense: 700,
        },
        {
            month: "Feb",
            income: 1600,
            expense: 800,
        },
    ];
    return (
        <>
            <BarChart data={data} width={400} height={150}>
                <XAxis dataKey="month" className="text-sm font-semibold" />
                <YAxis className="text-sm font-semibold" />
                <Bar dataKey="income" fill="#545DE6" />
                <Bar dataKey="expense" fill="#C6CAFF" />
                <Tooltip />
            </BarChart>
        </>
    );
};

export default ChartBarStatistic;
