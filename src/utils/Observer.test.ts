import Observer from './Observer';

describe('Observer', () => {
  test('notify calls subscribed listeners with data', () => {
    const observer = new Observer<string>();
    const listener = vi.fn();

    observer.subscribe(listener);
    observer.notify('hello');

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith('hello');
  });

  test('unsubscribe stops listener from being called', () => {
    const observer = new Observer<string>();
    const listener = vi.fn();

    observer.subscribe(listener);
    observer.unsubscribe(listener);
    observer.notify('hello');

    expect(listener).not.toHaveBeenCalled();
  });

  test('subscribe returns function that can unsubscribe', () => {
    const observer = new Observer<number>();
    const listener = vi.fn();

    const unsubscribe = observer.subscribe(listener);
    unsubscribe();
    observer.notify(10);

    expect(listener).not.toHaveBeenCalled();
  });
});
