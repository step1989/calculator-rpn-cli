import Translator from '../src/Translator';
import NumberToken from '../src/lexal/NumberToken';
import OperatorToken from '../src/lexal/OperatorToken';

test('Input tokens("1+2") in infix notation, get tokens("12+") in postfix notation', () => {
  const tokens = [
    new NumberToken('number', 1),
    new OperatorToken('operator', '+', 1),
    new NumberToken('number', 2),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'operator', value: '+', bindingPower: 1 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('Input tokens(1+2*3) in infix notation, get tokens("123*+") in postfix notation', () => {
  const tokens = [
    new NumberToken('number', 1),
    new OperatorToken('operator', '+', 1),
    new NumberToken('number', 2),
    new OperatorToken('operator', '*', 2),
    new NumberToken('number', 3),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'number', value: 3 },
    { type: 'operator', value: '*', bindingPower: 2 },
    { type: 'operator', value: '+', bindingPower: 1 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('Input tokens(1*2+3) in infix notation, get tokens("12*3+") in postfix notation', () => {
  const tokens = [
    new NumberToken('number', 1),
    new OperatorToken('operator', '*', 2),
    new NumberToken('number', 2),
    new OperatorToken('operator', '+', 1),
    new NumberToken('number', 3),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'operator', value: '*', bindingPower: 2 },
    { type: 'number', value: 3 },
    { type: 'operator', value: '+', bindingPower: 1 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});

test('Input tokens("(1*2+3)+4") in infix notation, get tokens("12*3+4+") in postfix notation', () => {
  const tokens = [
    new OperatorToken('openBracket', '(', 0, null),
    new NumberToken('number', 1),
    new OperatorToken('operator', '*', 2),
    new NumberToken('number', 2),
    new OperatorToken('operator', '+', 1),
    new NumberToken('number', 3),
    new OperatorToken('closedBracket', ')', 0, null),
    new OperatorToken('operator', '+', 1),
    new NumberToken('number', 4),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateToPostfixNotation();
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'operator', value: '*', bindingPower: 2 },
    { type: 'number', value: 3 },
    { type: 'operator', value: '+', bindingPower: 1 },
    { type: 'number', value: 4 },
    { type: 'operator', value: '+', bindingPower: 1 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
