import { calculatePrice } from "./calculatePrice";

describe("calculatePrice", () => {
  it("returns the sum price of all selected pizza parts", () => {
    expect(
      calculatePrice({
        size: "30cm",
        dough: "lush",
        sauces: "tomato",
        cheese: ["cheddar", "dor-blue", "mozarella"],
        vegetables: ["broccoli", "mushrooms", "olives"],
        meat: ["bacon", "chicken", "ham"],
      })
    ).toEqual(1250);
  });
});
