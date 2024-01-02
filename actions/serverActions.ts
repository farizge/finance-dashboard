"use server";
import { Item } from "@/typing";
import { revalidateTag } from "next/cache";

export const getData = async () => {
    const res = await fetch(
        "https://659407101493b0116069c278.mockapi.io/api/sample/buylist",
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
            cache: "no-cache",
            next: { tags: ["items"] },
        }
    );
    if (!res.ok) {
        throw new Error("Failed to Get Data");
    }
    return res.json();
};

export const revalidateData = async () => {
    //revalidate all items when an item is updated or created
    revalidateTag("items");
};

export const addItem = async (e: FormData) => {
    const itemName = e.get("itemName")?.toString();
    if (!itemName) return;
    const newItem: Item = {
        itemName,
    };
    // console.log(newItem);

    await fetch(
        "https://659407101493b0116069c278.mockapi.io/api/sample/buylist",
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
        }
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .catch((err) => console.log(err));
    revalidateTag("items");
};

export const checkItem = async (id: any) => {
    await fetch(
        `https://6592d819bb12970719901f53.mockapi.io/api/buylist/items/${id}`,
        {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ isChecked: true }),
        }
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .catch((err) => console.log(err));
};
