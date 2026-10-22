export enum LevelCustomer {
    BASIC="BASIC",
    PREMIUM="PREMIUM"
}

export interface Customer {
    id: string;
    name: string;
    level: LevelCustomer;
    shipping_zone: string;
    currency: string;
}