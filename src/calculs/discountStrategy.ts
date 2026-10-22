import { DiscountCalculation } from "./discountCalculation";

export class DiscountStrategy {
    constructor(private readonly calculation: DiscountCalculation){}

    calculate(discount: number) {
        return this.calculation.calculate(discount);
    }
}