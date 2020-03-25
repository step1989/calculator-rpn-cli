import TokenBuilder from '../src/TokenBuilder';

test('check all tokens', () => {
  const expression = '(5 + 3) - 122 * 33.34 / 3';
  const received = TokenBuilder.getTokens(expression);
  const expected = [
    { type: 'openBracket', bindingPower: 0 },
    { type: 'number', value: 5 },
    { type: 'operator', bindingPower: 1 },
    { type: 'number', value: 3 },
    { type: 'closedBracket', bindingPower: 0 },
    { type: 'operator', bindingPower: 1 },
    { type: 'number', value: 122 },
    { type: 'operator', bindingPower: 2 },
    { type: 'number', value: 33.34 },
    { type: 'operator', bindingPower: 2 },
    { type: 'number', value: 3 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
