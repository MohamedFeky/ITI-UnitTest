type Listener<T> = (data: T) => void;

export default class Observer<T> {
  private listeners: Listener<T>[] = [];

  subscribe(listener: Listener<T>) {
    this.listeners.push(listener);

    return () => {
      this.unsubscribe(listener);
    };
  }

  unsubscribe(listener: Listener<T>) {
    this.listeners = this.listeners.filter(currentListener => {
      return currentListener !== listener;
    });
  }

  notify(data: T) {
    for (const listener of this.listeners) {
      listener(data);
    }
  }
}
