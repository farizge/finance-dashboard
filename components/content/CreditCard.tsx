import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import logoVisa from "@/assets/visa.svg";
import illustration from "@/assets/illustration.png";

const CreditCard = () => {
    return (
        <Card className="w-[40%] bg-[#545DE6] px-4 pb-4 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <div className="font-bold text-3xl text-white">S.</div>
                <Image src={logoVisa} alt="logo-visa" width={70} />
            </div>
            <div className="relative grid place-items-center">
                <Image
                    src={illustration}
                    alt="illustration"
                    width={250}
                    className="absolute"
                />
            </div>
            <div className="flex justify-between items-end">
                <div className="text-white font-medium text-xl">
                    <p>**** 9879</p>
                    <p>John Demon</p>
                </div>
                <p className="text-white font-medium text-xl">08/12</p>
            </div>
        </Card>
    );
};

export default CreditCard;
