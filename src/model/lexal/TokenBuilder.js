import NumberToken from "./NumberToken";
import OperatorToken from "./OperatorToken";

export default class TokenBuilder {
  static NUMBERS = '0123456789.';

  static BRACKETS = '()';

  static OPERATORS = '+-*/()';

  static LETTERALS = '';

  static OPERATORS_TYPE = {
    '+': 'operator',
    '-': 'operator',
    '*': 'operator',
    '/': 'operator',
    '(': 'openBracket',
    ')': 'closedBracket',
  };

  static BINDINGPOWER = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '(': 0,
    ')': 0,
  };

  static MATHFUNC = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '(': null,
    ')': null,
  };

  static getTokens(expression) {
    const expressionWithoutSpace = expression.split('').filter((symbol) => symbol !== ' ');
    const tokens = [];
    let buffer = [];
    let currentType = null;
    expressionWithoutSpace.forEach((el) => {
      if (this.NUMBERS.includes(el)) {
        buffer.push(el);
      } else if (this.OPERATORS.includes(el)) {
        if (buffer.length !== 0) {
          const token = new NumberToken('number', Number(buffer.join('')));
          tokens.push(token);
          buffer = [];
        }
        const type = this.OPERATORS_TYPE[el];
        const token = new OperatorToken(type, el, this.BINDINGPOWER[el], this.MATHFUNC[el]);
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
