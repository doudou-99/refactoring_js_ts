import { Order } from "../interfaces/order";
import { ParserCSV } from "./parser";

export class OrderParser {
    async parser(): Promise<Order[]> {
        const parser = new ParserCSV();
        return await parser.parserCSV<Order>('orders.csv')
    }
}