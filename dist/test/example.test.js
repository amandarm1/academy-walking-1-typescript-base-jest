"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("../main/example");
describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example = new example_1.Example();
        expect(example.add(1, 2)).toBe(3);
    });
});
//# sourceMappingURL=example.test.js.map