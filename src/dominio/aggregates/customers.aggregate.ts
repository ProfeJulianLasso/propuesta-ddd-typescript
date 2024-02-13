import { User } from '../entities/user.entity';
import type { IEvent } from '../events/interfaces/events.interface';
import { UserEvent } from '../events/user.event';
import { NameValueObject } from '../value-objects/name.value-object';

export class CustomerAggregate {
  static createUser(userName: string, event: IEvent): User {
    const user = new User();
    const name = NameValueObject.create(userName);
    const answer = user.register(name);

    const userEvent = new UserEvent(event);
    userEvent.created(answer);

    return answer;
  }
}