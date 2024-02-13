import type { User } from "../entities/user.entity";
import type { IEvent } from "./interfaces/events.interface";

export class UserEvent {
  constructor(private readonly event: IEvent) {}

  created(user: User): void {
    this.event.emit("user-created", {
      id: user.id.getValue(),
      name: user.name.getValue(),
    });
    console.log("User created event emitted");
  }
}
