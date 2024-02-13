export interface IEvent {
  emit<Payload>(channel: string, payload: Payload): void;
}