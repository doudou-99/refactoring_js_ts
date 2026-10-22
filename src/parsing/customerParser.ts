import { Customer } from "../interfaces/customer";
import { ParserCSV } from "./parser";

export class CustomerParser {
    async parser(): Promise<Customer[]> {
        const parser = new ParserCSV();
        return await parser.parserCSV<Customer>('customers.csv')
    }
}