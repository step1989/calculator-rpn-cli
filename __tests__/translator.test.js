import NumberToken from '../src/models/NumberToken';
import AdditionToken from '../src/models/operators/binary/AdditionToken';
import MultiplicationToken from '../src/models/operators/binary/MultiplicationToken';
import OpenBracketToken from '../src/models/operators/brackets/OpenBracketToken';
import ClosedBracketToken from '../src/models/operators/brackets/ClosedBracketToken';
import Translator from '../src/Translator';

test('Input tokens("(1*2+3)+4") in infix notation, get tokens("12*3+4+") in postfix notation', () => {
  const tokens = [
    new OpenBracketToken('openBracket'),
    new NumberToken('number', 1),
    new MultiplicationToken('operator'),
    new NumberToken('number', 2),
    new AdditionToken('operator'),
    new NumberToken('number', 3),
    new ClosedBracketToken('closedBracket'),
    new AdditionToken('operator'),
    new NumberToken('number', 4),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateTokensToPostfixNotation();
  const expected = [
    { type: 'number', value: 1 },
    { type: 'number', value: 2 },
    { type: 'operator', bindingPower: 2 },
    { type: 'number', value: 3 },
    { type: 'operator', bindingPower: 1 },
    { type: 'number', value: 4 },
    { type: 'operator', bindingPower: 1 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
