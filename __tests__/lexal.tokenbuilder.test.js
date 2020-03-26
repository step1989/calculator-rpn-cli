import TokenBuilder from '../src/TokenBuilder';

test('check all tokens', () => {
  const expression = '(5 + 3) - 122 * 33.34 / 3';
  const received = new TokenBuilder(expression).getTokens();
  const expected = [
    { bindingPower: 0 },
    { value: 5 },
    { bindingPower: 1 },
    { value: 3 },
    { bindingPower: 0 },
    { bindingPower: 1 },
    { value: 122 },
    { bindingPower: 2 },
    { value: 33.34 },
    { bindingPower: 2 },
    { value: 3 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
test('check sin tokens', () => {
  const expression = 'sin(55)';
  const received = new TokenBuilder(expression).getTokens();
  const expected = [
    { bindingPower: 10 },
    { bindingPower: 0 },
    { value: 55 },
    { bindingPower: 0 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
