import { Promotion } from "../interfaces/promotion";
import { ParserCSV } from "./parser";

export class PromotionParser {
    async parser(): Promise<Promotion[]> {
        const parser = new ParserCSV();
        return await parser.parserCSV<Promotion>('promotions.csv')
    }
}