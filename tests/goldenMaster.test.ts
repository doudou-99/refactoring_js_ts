import { run } from "../legacy/orderReportLegacy";
import { expect, test } from '@jest/globals';

test("test of Golden Master", () => {
        const result = run()
        expect(result).toMatchSnapshot()
})

