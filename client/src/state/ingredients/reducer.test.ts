import { mockState } from "../../mocks/mockStore";
import {
  IngredientsAction,
  ingredientsReducer,
  IngredientsState,
} from "./reducer";

describe("ingredientsReducer", () => {
  describe("set_ingredients", () => {
    it("sets ingredients", () => {
      const initialState: IngredientsState = {
        data: [],
        isLoading: true,
      };
      const action: IngredientsAction = {
        type: "set_ingredients",
        payload: mockState.ingredients.data,
      };

      expect(
        ingredientsReducer(initialState, action)
      ).toEqual<IngredientsState>({
        data: mockState.ingredients.data,
        isLoading: false,
      });
    });
  });

  describe("set_ingredients_error", () => {
    it("sets error", () => {
      const error = new Error("Some error");
      const initialState: IngredientsState = {
        data: [],
        isLoading: true,
      };
      const action: IngredientsAction = {
        type: "set_ingredients_error",
        payload: error,
      };

      expect(
        ingredientsReducer(initialState, action)
      ).toEqual<IngredientsState>({
        error,
        data: [],
        isLoading: false,
      });
    });
  });
});
