import { deepEqual, groupBy } from './objects';

describe('object helpers', () => {
  test('groupBy groups array items by key', () => {
    const users = [
      { name: 'Ali', role: 'admin' },
      { name: 'Mona', role: 'user' },
      { name: 'Omar', role: 'admin' },
    ];

    expect(groupBy(users, 'role')).toEqual({
      admin: [
        { name: 'Ali', role: 'admin' },
        { name: 'Omar', role: 'admin' },
      ],
      user: [{ name: 'Mona', role: 'user' }],
    });
  });

  test('deepEqual returns true for deeply equal objects', () => {
    const obj1 = { name: 'Ali', address: { city: 'Cairo' } };
    const obj2 = { name: 'Ali', address: { city: 'Cairo' } };

    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('deepEqual returns false for different objects', () => {
    const obj1 = { name: 'Ali', address: { city: 'Cairo' } };
    const obj2 = { name: 'Ali', address: { city: 'Giza' } };

    expect(deepEqual(obj1, obj2)).toBe(false);
  });
});
