import { expect, it, describe, mock, beforeAll } from "bun:test";
import { CustomerAggregate } from "./customers.aggregate";
import type { IEvent } from "../events/interfaces/events.interface";

describe("CustomerAggregate", () => {
  beforeAll(() => {
    mock.module("../value-objects/id.value-object", () => {
      return {
        IdValueObject: {
          create: () => ({ getValue: () => 1 }),
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

  it("should create a valid customer", () => {
    const mockEvent = {
      emit: mock(),
    } as IEvent;
    const user = CustomerAggregate.createUser("name", mockEvent);

    expect(user.id.getValue()).toBe(1);
    expect(user.name.getValue()).toBe("name");
    expect(mockEvent.emit).toHaveBeenCalledWith("user-created", {
      id: 1,
      name: "name",
    });
  });
});
