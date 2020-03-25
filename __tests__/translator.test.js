import NumberToken from '../src/models/NumberToken';
import AdditionToken from '../src/models/operators/binary/AdditionToken';
import MultiplicationToken from '../src/models/operators/binary/MultiplicationToken';
import OpenBracketToken from '../src/models/operators/brackets/OpenBracketToken';
import ClosedBracketToken from '../src/models/operators/brackets/ClosedBracketToken';
import Translator from '../src/Translator';

test('Input tokens("(1*2+3)+4") in infix notation, get tokens("12*3+4+") in postfix notation', () => {
  const tokens = [
    new OpenBracketToken(),
    new NumberToken(1),
    new MultiplicationToken(),
    new NumberToken(2),
    new AdditionToken(),
    new NumberToken(3),
    new ClosedBracketToken(),
    new AdditionToken(),
    new NumberToken(4),
  ];
  const translator = new Translator(tokens);
  const received = translator.translateTokensToPostfixNotation();
  const expected = [
    { value: 1 },
    { value: 2 },
    { bindingPower: 2 },
    { value: 3 },
    { bindingPower: 1 },
    { value: 4 },
    { bindingPower: 1 },
  ];
  expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));
});
