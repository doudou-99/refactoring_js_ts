import { DiscountCalculation } from "./discountCalculation";

export class FixedDiscount implements DiscountCalculation{
    calculate(discount: number): number {
        return discount;
    }
}