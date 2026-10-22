import { PriceTotalDto } from "../interfaces/priceTotalDto";
import { BonusMatin } from "./bonusMatin";

export class PriceTotalCustomerCalculation {
    calculate(dto: PriceTotalDto) {
        let lineTotal = dto.qty * dto.basePrice * (1 - dto.discountRate) - dto.fixedDiscount * dto.qty;
        const bonusMatin = new BonusMatin()
        const hour = parseInt(dto.time.split(':')[0]);
        const morningBonus = bonusMatin.calculate(hour, lineTotal)
        return lineTotal - morningBonus;
    }
}