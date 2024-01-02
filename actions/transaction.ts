"use server";
export const getDataTransaction = async () => {
    const res = await fetch(
        "https://659407101493b0116069c278.mockapi.io/api/sample/transaction",
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
