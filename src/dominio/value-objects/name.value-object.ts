export class NameValueObject {
  private constructor(private readonly value: string) {}

  static create(name: string): NameValueObject {
    if (!this.validate(name)) {
      throw new Error('El nombre no puede estar vacío');
    }
    return new NameValueObject(name);
  }

  getValue(): string {
    return this.value;
  }

  private static validate(name: string): boolean {
    return name.length > 0;
  }
}