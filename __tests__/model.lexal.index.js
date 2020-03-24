import TokenBuilder from '../src/model/lexal/TokenBuilder';

test('input number, get number type token', () => {
  const expression = '1';
  const received = TokenBuilder.getTokens(expression);
  const expected = [
    { type: 'number', value: 1 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('input operator, get operator type token', () => {
  const expression = '+';
  const received = TokenBuilder.getTokens(expression);
  const expected = [
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
  ];
  console.log(expected);
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
