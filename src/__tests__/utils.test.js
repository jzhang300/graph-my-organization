import { generateHierarchicalData } from "../utils";
import data from "./mock/mock-data";

const testData = data.slice(0, 5);
let root;

describe("utils", () => {
  describe("generateHierarchicalData", () => {
    it("does not mutate", () => {
      root = generateHierarchicalData(testData);
      expect(testData === root).toEqual(false);
    });
  });
});
