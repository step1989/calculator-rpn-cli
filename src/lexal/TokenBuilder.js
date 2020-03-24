import NumberToken from "./NumberToken";
import OperatorToken from "./OperatorToken";

export default class TokenBuilder {
  static NUMBERS = '0123456789.';

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
        const type = this.OPERATORS_TYPE[el];
        const bindingPower = this.BINDINGPOWER[el];
        const mathFunc = this.MATHFUNC[el];
        const token = new OperatorToken(type, el, bindingPower, mathFunc);
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
