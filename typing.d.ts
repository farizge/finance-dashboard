export interface Item {
    itemID?: string;
    itemName: string;
    isChecked?: boolean;
}

export interface Transaction {
    transaction_id?: string;
    transaction_date?: string;
    username: string;
    avatar?: string;
    amount: number;
}
