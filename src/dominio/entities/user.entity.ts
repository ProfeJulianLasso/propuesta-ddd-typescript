import { IdValueObject } from '../value-objects/id.value-object';
import { NameValueObject } from '../value-objects/name.value-object';

const NO_NAME_ASSIGNED = "NO HAY NOMBRE ASIGNADO";

export class User {
  id: IdValueObject;
  name: NameValueObject;

  constructor(
    name?: NameValueObject,
  ) {
    this.id = IdValueObject.create();
    this.name = name ?? NameValueObject.create(NO_NAME_ASSIGNED);
  }

  register(name: NameValueObject): this {
    this.name = name;
    return this;
  }

}