import Image from "next/image";
import underConstruction from "@/assets/under-construction.png";

const Settings = () => {
    return (
        <div className="grid place-items-center min-h-screen">
            <Image src={underConstruction} alt="under-construction" />
        </div>
    );
};

export default Settings;
