import NumberToken from './models/NumberToken';
import AdditionToken from './models/operators/binary/AdditionToken';
import SubtractionToken from './models/operators/binary/SubtractionToken';
import MultiplicationToken from './models/operators/binary/MultiplicationToken';
import DivisionToken from './models/operators/binary/DivisionToken';
import OpenBracketToken from './models/operators/brackets/OpenBracketToken';
import ClosedBracketToken from './models/operators/brackets/ClosedBracketToken';

export default class TokenBuilder {
  static NUMBERS = '0123456789.';

  static OPERATORS = '+-*/()';

  static LETTERALS = '';


  static OPERATORS_TYPE = {
    '+': new AdditionToken(),
    '-': new SubtractionToken(),
    '*': new MultiplicationToken(),
    '/': new DivisionToken(),
    '(': new OpenBracketToken(),
    ')': new ClosedBracketToken(),
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
          const value = Number(buffer.join(''));
          const token = new NumberToken(value);
          tokens.push(token);
          buffer = [];
        }
        const token = this.OPERATORS_TYPE[el];
        tokens.push(token);
      }
    });
    if (buffer.length !== 0) {
      const value = Number(buffer.join(''));
      const token = new NumberToken(value);
      tokens.push(token);
    }
    console.log(tokens);
    return tokens;
  }
}
