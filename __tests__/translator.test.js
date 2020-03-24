import Translator from '../src/Translator';
import NumberToken from '../src/lexal/NumberToken';
import OperatorToken from '../src/lexal/OperatorToken';

test('Expression "1+2" .Input tokens in infix notation, get tokens in postfix notation', () => {
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
