import TokenBuilder from '../src/lexal/TokenBuilder';


test('input operator and number, get operator and number type tokens', () => {
  const expression = '1+ 2';
  const received = TokenBuilder.getTokens(expression);
  const expected = [
    { type: 'number', value: 1 },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
    { type: 'number', value: 2 },
  ];
  console.log(expected);
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('input operator and float number, get operator and number type tokens', () => {
  const expression = '1.2+ 2.22  -555';
  const received = TokenBuilder.getTokens(expression);
  const expected = [
    { type: 'number', value: 1.2 },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
    { type: 'number', value: 2.22 },
    { type: 'operator', value: '-', bindingPower: 1, mathFunc: (a, b) => a - b },
    { type: 'number', value: 555 },
  ];
  console.log(expected);
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('input operator, number and bracket, get operator, number, bracket type tokens', () => {
  const expression = '(5 + 3) - 1';
  const received = TokenBuilder.getTokens(expression);
  const expected = [
    { type: 'openBracket', value: '(', bindingPower: 0, mathFunc: null },
    { type: 'number', value: 5 },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
    { type: 'number', value: 3 },
    { type: 'closedBracket', value: ')', bindingPower: 0, mathFunc: null },
    { type: 'operator', value: '-', bindingPower: 1, mathFunc: (a, b) => a - b },
    { type: 'number', value: 1 },
  ];
  console.log(expected);
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
