import { expect, test } from '@jest/globals';
import { ParserCSV } from '../src/parsing/parser';
import { Customer } from '../src/interfaces/customer';
import { Order } from '../src/interfaces/order';
import { Product } from '../src/interfaces/product';
import { Promotion } from '../src/interfaces/promotion';
import { ShippingZone } from '../src/interfaces/shippingZone';
import { CustomerParser } from '../src/parsing/customer_parser';
import { OrderParser } from '../src/parsing/order_parser';
import { ProductParser } from '../src/parsing/product_parser';
import { PromotionParser } from '../src/parsing/promotion_parser';
import { ShippingZoneParser } from '../src/parsing/shippingParser';

test("parsing customer.csv", async () => {
    const parser = new CustomerParser();
    const results = await parser.parser()
    expect(results.length).toBeGreaterThan(0);
})

test("parsing orders.csv", async () => {
    const parser = new OrderParser();
    const results = await parser.parser()
    expect(results.length).toBeGreaterThan(0);
})

test("parsing products.csv", async () => {
    const parser = new ProductParser();
    const results = await parser.parser()
    expect(results.length).toBeGreaterThan(0);
})

test("parsing promotions.csv", async () => {
    const parser = new PromotionParser();
    const results = await parser.parser()
    expect(results.length).toBeGreaterThan(0);
})

test("parsing shipping_zones.csv", async () => {
    const parser = new ShippingZoneParser();
    const results = await parser.parser()
    expect(results.length).toBeGreaterThan(0);
})