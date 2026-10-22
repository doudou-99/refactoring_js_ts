import { DiscountCalculation } from "./discountCalculation";

export class PercentageDiscount implements DiscountCalculation{
    calculate(discount: number): number {
        return discount / 100;
    }
}