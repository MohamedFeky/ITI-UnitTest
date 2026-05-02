import { formatDate } from './date';

test('formatDate returns date in YYYY-MM-DD format', () => {
  expect(formatDate(new Date(2026, 4, 2))).toBe('2026-05-02');
});
