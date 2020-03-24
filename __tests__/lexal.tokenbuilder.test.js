import TokenBuilder from '../src/lexal/TokenBuilder';

test('check all tokens', () => {
  const expression = '(5 + 3) - 122 * 33.34 / 3';
  const received = TokenBuilder.getTokens(expression);
  const expected = [
    {
      type: 'openBracket', value: '(', bindingPower: 0, mathFunc: null, countArguments: null,
    },
    { type: 'number', value: 5 },
    {
      type: 'operator', value: '+', bindingPower: 1, countArguments: 2,
    },
    { type: 'number', value: 3 },
    {
      type: 'closedBracket', value: ')', bindingPower: 0, mathFunc: null, countArguments: null,
    },
    {
      type: 'operator', value: '-', bindingPower: 1, countArguments: 2,
    },
    { type: 'number', value: 122 },
    {
      type: 'operator', value: '*', bindingPower: 2, countArguments: 2,
    },
    { type: 'number', value: 33.34 },
    {
      type: 'operator', value: '/', bindingPower: 2, countArguments: 2,
    },
    { type: 'number', value: 3 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
