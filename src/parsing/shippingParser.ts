import { ShippingZone } from "../interfaces/shippingZone";
import { ParserCSV } from "./parser";

export class ShippingZoneParser {
    async parser(): Promise<ShippingZone[]> {
        const parser = new ParserCSV();
        return await parser.parserCSV<ShippingZone>('shipping_zones.csv')
    }
}