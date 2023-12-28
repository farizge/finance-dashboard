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
        <BarChart data={data} width={400} height={200}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#545DE6" />
            <Bar dataKey="expense" fill="#C6CAFF" />
        </BarChart>
    );
};

export default ChartBarStatistic;
