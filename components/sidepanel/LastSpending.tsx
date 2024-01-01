import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import olshop from "@/assets/online-shopping.png";
import hospital from "@/assets/hospital.png";
import tickets from "@/assets/tickets.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LastSpending = () => {
    return (
        <Card className="flex flex-col gap-4 min-w-80">
            <CardTitle>Last Spending</CardTitle>
            <CardContent className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <Image
                        src={olshop}
                        alt="online-shop"
                        width={50}
                        height={50}
                    />
                    <div>
                        <p className="text-sm font-semibold">Online Shopping</p>
                        <p className="text-zinc-500 text-xs">
                            May, 30 2023 at 08:00pm
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <Image
                        src={hospital}
                        alt="online-shop"
                        width={50}
                        height={50}
                    />
                    <div>
                        <p className="text-sm font-semibold">
                            Pay The Hospital
                        </p>
                        <p className="text-zinc-500 text-xs">
                            May, 28 2023 at 10:00am
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <Image
                        src={tickets}
                        alt="online-shop"
                        width={50}
                        height={50}
                    />
                    <div>
                        <p className="text-sm font-semibold">Tickets</p>
                        <p className="text-zinc-500 text-xs">
                            May, 10 2023 at 12:00pm
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Link
                    href="/"
                    className="flex gap-1 items-center text-[#515BE6]"
                >
                    <p className="font-semibold">View All</p>
                    <ArrowRight size="16" />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default LastSpending;
