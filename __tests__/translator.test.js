import Translator from '../src/Translator';
import NumberToken from '../src/lexal/NumberToken';
import OperatorToken from '../src/lexal/OperatorToken';

test('Input tokens("1+2") in infix notation, get tokens("12+") in postfix notation', () => {
  const sum = (a, b) => a + b;
  const tokens = [
    new NumberToken('number', 1),
    new OperatorToken('operator', '+', 1, sum),
    new NumberToken('number', 2),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
  ]
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('Input tokens(1+2*3) in infix notation, get tokens("123*+") in postfix notation', () => {
  const sum = (a, b) => a + b;
  const div = (a, b) => a * b;
  const tokens = [
    new NumberToken('number', 1),
    new OperatorToken('operator', '+', 1, sum),
    new NumberToken('number', 2),
    new OperatorToken('operator', '*', 2, div),
    new NumberToken('number', 3),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  console.log(received);
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'operator', value: '*', bindingPower: 2, mathFunc: (a, b) => a * b },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('Input tokens(1*2+3) in infix notation, get tokens("12*3+") in postfix notation', () => {
  const sum = (a, b) => a + b;
  const div = (a, b) => a * b;
  const tokens = [
    new NumberToken('number', 1),
    new OperatorToken('operator', '*', 2, div),
    new NumberToken('number', 2),
    new OperatorToken('operator', '+', 1, sum),
    new NumberToken('number', 3),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  console.log(received);
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'operator', value: '*', bindingPower: 2, mathFunc: (a, b) => a * b },
    { type: 'number', value: 3 },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('Input tokens("(1*2+3)+4") in infix notation, get tokens("12*3+4+") in postfix notation', () => {
  const sum = (a, b) => a + b;
  const div = (a, b) => a * b;
  const tokens = [
    new OperatorToken('openBracket', '(', 0, null),
    new NumberToken('number', 1),
    new OperatorToken('operator', '*', 2, div),
    new NumberToken('number', 2),
    new OperatorToken('operator', '+', 1, sum),
    new NumberToken('number', 3),
    new OperatorToken('closeBracket', ')', 0, null),
    new OperatorToken('operator', '+', 1, sum),
    new NumberToken('number', 4),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  console.log(received);
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'operator', value: '*', bindingPower: 2, mathFunc: (a, b) => a * b },
    { type: 'number', value: 3 },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
    { type: 'number', value: 4 },
    { type: 'operator', value: '+', bindingPower: 1, mathFunc: (a, b) => a + b },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
