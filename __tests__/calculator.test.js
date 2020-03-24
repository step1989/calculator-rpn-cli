import Calculator from "../src/Calculator";

test('calculate one operation expression', () => {
  const expression = '1+ 2';
  const received = new Calculator(expression).calculate();
  const expected = 3;
  expect(received).toEqual(expected);
});

test('Input tokens(1+2*3) in infix notation, get tokens("123*+") in postfix notation', () => {
  const expression = '1+2*3';
  const received = new Calculator(expression).calculate();
  const expected = 7;
  expect(received).toEqual(expected);
});

test('Input tokens(1*2+3) in infix notation, get tokens("12*3+") in postfix notation', () => {
  const expression = '1*2+3';
  const received = new Calculator(expression).calculate();
  const expected = 5;
  expect(received).toEqual(expected);
});

test('Input tokens("(1*2+3)+4") in infix notation, get tokens("12*3+4+") in postfix notation', () => {
  const expression = '(1*2+3)+4';
  const received = new Calculator(expression).calculate();
  const expected = 9;
  expect(received).toEqual(expected);
});
