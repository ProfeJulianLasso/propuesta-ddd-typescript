export class IdValueObject {
  private constructor(private readonly value: number) {}

  static create(): IdValueObject {
    return new IdValueObject(this.generateRandomId());
  }

  getValue(): number {
    return this.value;
  }

  private static generateRandomId(): number {
    return Math.floor(Math.random() * 1000);
  }
}