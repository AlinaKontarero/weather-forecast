import { numberFormatter } from "../utils/numberFormatter";

describe("numberFormatter", () => {
  const num1 = 45.545452255996324;
  const fix1 = 1;
  const fix0 = 0;

  it("sets 1 fixed number", () => {
    expect(numberFormatter(num1, fix1)).toEqual("45.5");
  });

  it("sets no fixed number", () => {
    expect(numberFormatter(num1, fix0)).toEqual("46");
  });
});
