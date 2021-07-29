import { Usfundamentals } from "../src";
require("dotenv").config();
describe("Testing the Companies segment", () => {
  const c = new Usfundamentals(process.env.TOKEN);
  test("getting data of apple", async () => {
    const apple = (await c.Companies(["320193"]))[0];
    expect(apple.company_id).toBe("320193");
    expect(apple.name_latest).toContain("Apple");
  });
});
