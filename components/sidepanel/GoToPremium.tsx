import { Card, CardTitle } from "@/components/ui/card";
import diamond from "@/assets/diamond.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const GoToPremium = () => {
    return (
        <Card className="flex flex-col gap-4">
            <CardTitle className="text-center">Go To Premium</CardTitle>
            <Image src={diamond} alt="diamond" width={70} />
            <div>
                <p className="font-semibold leading-none">
                    Need more features?
                </p>
                <p className="leading-none text-zinc-500">
                    Update your account to get more features
                </p>
            </div>
            <Button className="bg-[#515BE6] font-semibold">Get Premium</Button>
        </Card>
    );
};

export default GoToPremium;
