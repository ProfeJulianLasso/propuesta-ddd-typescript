import { expect, it, describe, mock, beforeAll } from "bun:test";
import { CustomerAggregate } from "./customers.aggregate";
import type { IEvent } from "../events/interfaces/events.interface";
import { IdValueObject } from '../value-objects/id.value-object';

describe("CustomerAggregate", () => {
  beforeAll(() => {
    mock.module("../value-objects/id.value-object", () => {
      return {
        IdValueObject: {
          create: () => ({ getValue: () => 321 }),
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

  mock.module("../entities/user.entity", () => {
    return {
      User: class {
        id = IdValueObject.create();
        register = (name: any) => ({
          id: this.id,
          name: name,
        });
      },
    };
  });

  it("should create a valid customer", () => {
    const mockEvent = {
      emit: mock(),
    } as IEvent;
    const user = CustomerAggregate.createUser("name", mockEvent);

    expect(user.id.getValue()).toBe(321);
    expect(user.name.getValue()).toBe("name");
    expect(mockEvent.emit).toHaveBeenCalledWith("user-created", {
      id: 321,
      name: "name",
    });
  });
});
