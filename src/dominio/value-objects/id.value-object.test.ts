import { expect, it, describe } from "bun:test";
import { IdValueObject } from "./id.value-object";

describe("IdValueObject", () => {
  it("should create a valid id", () => {
    const idVO = IdValueObject.create();
    const id = idVO.getValue();
    expect(id).toBeNumber();
  });
});
