import checkHealth from '../health';

test('health', () => {
  const character = { name: 'Маг', health: 90 };
  const result = checkHealth(character);
  expect(result).toBe('healthy');
});

test('health', () => {
  const character = { name: 'Лучник', health: 50 };
  const result = checkHealth(character);
  expect(result).toBe('wounded');
});

test('health', () => {
  const character = { name: 'Гном', health: 4 };
  const result = checkHealth(character);
  expect(result).toBe('critical');
});
