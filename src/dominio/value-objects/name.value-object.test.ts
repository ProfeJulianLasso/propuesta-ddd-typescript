import { expect, it, describe } from "bun:test";
import { NameValueObject } from "./name.value-object";

describe("NameValueObject", () => {
  it("should create a valid name", () => {
    const userName = "name";
    const nameVO = NameValueObject.create(userName);
    const name = nameVO.getValue();
    expect(name).toBe("name");
  });

  it("should throw an error when the name is empty", () => {
    const throwNameError = () => NameValueObject.create("");
    expect(throwNameError).toThrow("El nombre no puede estar vacío");
  });
});
