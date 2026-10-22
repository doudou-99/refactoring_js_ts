export enum TypePourcentage {
    PERCENTAGE="PERCENTAGE",
    FIXED="FIXED"
}

export interface Promotion {
    code: string;
    type: TypePourcentage;
    value: string;
    active: boolean;
}