import { Product } from "../interfaces/product";
import { ParserCSV } from "./parser";

export class ProductParser {
    async parser(): Promise<Product[]> {
        const parser = new ParserCSV();
        return await parser.parserCSV<Product>('products.csv')
    }
}