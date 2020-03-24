import Calculator from "../src/Calculator";

const testData = [
  ['3', 3, 'simple test'],
  ['1+2-3', 0, 'two operation'],
  ['6 - 3 + 2 * 4', 11, 'binding power'],
  ['12/2-6+2*2', 4, 'binding power 2'],
  ['((1 + 2)/3) - 4', -3, 'brackets 1'],
  ['( 1+ 2) / 3 + 4 ', 5, 'brackets 2'],
  ['2*(1+1) ', 4, 'brackets 3'],
  ['( 11+ 2.33) / 3.3 + 3 ', 7.04, 'float expression'],
];

describe.each(testData)('test expression', (expression, expected, description) => {
  test(`${description}`, () => {
    const received = new Calculator(expression).calculate();
    expect(received).toEqual(expected);
  });
});
