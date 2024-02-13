import { expect, it, describe, mock, beforeAll } from "bun:test";
import { NameValueObject } from "../value-objects/name.value-object";
import { User } from "./user.entity";

describe("UserEntity", () => {
  beforeAll(() => {
    mock.module("../value-objects/id.value-object", () => {
      return {
        IdValueObject: {
          create: () => ({ getValue: () => 123 }),
        },
      };
    });

    mock.module("../value-objects/name.value-object", () => {
      return {
        NameValueObject: {
          create: (name: string) => ({ getValue: () => name }),
        },
      };
    });
  });

  it("should create a valid user", () => {
    const name = "name";
    const nameVO = NameValueObject.create(name);
    const user = new User();
    const userEntity = user.register(nameVO);

    expect(userEntity.id.getValue()).toBe(123);
    expect(userEntity.name.getValue()).toBe("name");
  });
});
