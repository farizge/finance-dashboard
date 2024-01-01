import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const QuickChat = () => {
    return (
        <Card className="w-[50%]">
            <CardTitle>
                Ester Howard |{" "}
                <span className="font-normal text-zinc-500 text-sm">
                    Quick Chat
                </span>
            </CardTitle>
            <CardContent className="flex flex-col gap-4">
                <div className="flex gap-2 items-center justify-end">
                    <div className="bg-[#515BE6] max-w-sm p-2 rounded-md rounded-br-none">
                        <p className="leading-none text-white text-sm">
                            Are you ready?
                        </p>
                    </div>
                    <Avatar>
                        <AvatarImage src="https://ord-mirror.magiceden.dev/content/1e36b2c3e29788bd37a992bc62ebd51c220f7b077aa08ec67f2ab77c7a739dfbi0" />
                        <AvatarFallback>EH</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex gap-2 items-center justify-start">
                    <Avatar>
                        <AvatarImage src="https://ord-mirror.magiceden.dev/content/7b4263ecb834423828d6455746e1dce2c5904be59790625449e8173e809b245ei0" />
                        <AvatarFallback>EH</AvatarFallback>
                    </Avatar>
                    <div className="bg-[#F7F6FC] max-w-sm p-2 rounded-md rounded-bl-none">
                        <p className="leading-none text-sm">
                            I have prepared everything.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <Input placeholder="Type your messages here." />
                    <Button
                        size="icon"
                        className="absolute right-2 top-1 w-8 h-8 bg-[#515BE6]"
                    >
                        <Send size="16"></Send>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickChat;
