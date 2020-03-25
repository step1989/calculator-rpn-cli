import NumberToken from './models/NumberToken';
import AdditionToken from './models/operators/AdditionToken';
import SubtractionToken from './models/operators/SubtractionToken';
import MultiplicationToken from './models/operators/MultiplicationToken';
import DivisionToken from './models/operators/DivisionToken';
import OpenBracketToken from './models/operators/OpenBracketToken';
import ClosedBracketToken from './models/operators/ClosedBracketToken';

export default class TokenBuilder {
  static NUMBERS = '0123456789.';

  static OPERATORS = '+-*/()';

  static LETTERALS = '';


  static OPERATORS_TYPE = {
    '+': new AdditionToken('operator'),
    '-': new SubtractionToken('operator'),
    '*': new MultiplicationToken('operator'),
    '/': new DivisionToken('operator'),
    '(': new OpenBracketToken('openBracket'),
    ')': new ClosedBracketToken('closedBracket'),
  };

  static getTokens(expression) {
    const expressionWithoutSpace = expression.split('').filter((symbol) => symbol !== ' ');
    const tokens = [];
    let buffer = [];
    expressionWithoutSpace.forEach((el) => {
      if (this.NUMBERS.includes(el)) {
        buffer.push(el);
      } else if (this.OPERATORS.includes(el)) {
        if (buffer.length !== 0) {
          const type = 'number';
          const token = new NumberToken(type, Number(buffer.join('')));
          tokens.push(token);
          buffer = [];
        }
        const token = this.OPERATORS_TYPE[el];
        tokens.push(token);
      }
    });
    if (buffer.length !== 0) {
      const token = new NumberToken('number', Number(buffer.join('')));
      tokens.push(token);
    }
    return tokens;
  }
}
