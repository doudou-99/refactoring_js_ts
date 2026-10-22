export class BonusMatin {
    DISCOUNT_MORNING = 0.03

    calculate(hour: number, price: number): number {
        let morningBonus = 0;
        if (hour < 10) {
            morningBonus = price * this.DISCOUNT_MORNING; 
        }
        return morningBonus;
    }
}