import { expect, it, describe, mock } from "bun:test";
import { UserEvent } from "./user.event";
import type { User } from '../entities/user.entity';
import type { IEvent } from './interfaces/events.interface';

describe("UserEvent", () => {
  it("should emit a user created event", () => {
    const event = {
      emit: mock(),
    } as IEvent;
    const userEvent = new UserEvent(event);
    const user = {
      id: { getValue: () => 1 },
      name: { getValue: () => "name" },
    } as User
    userEvent.created(user);
    expect(event.emit).toHaveBeenCalledWith("user-created", {
      id: 1,
      name: "name",
    });
  });
});
