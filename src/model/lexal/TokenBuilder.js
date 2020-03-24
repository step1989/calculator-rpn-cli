import NumberToken from "./NumberToken";
import OperatorToken from "./OperatorToken";

export default class TokenBuilder {
  static NUMBERS = '0123456789.';

  static OPERATORS = '+-*/';

  static BINDINGPOWER = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  static MATHFUNC = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  static getTokens(expression) {
    const expressionWithoutSpace = expression.split('').filter((symbol) => symbol !== ' ');
    const tokens = [];
    expressionWithoutSpace.forEach((el) => {
      if (this.NUMBERS.includes(el)) {
        const token = new NumberToken('number', Number(el));
        tokens.push(token);
      } else if (this.OPERATORS.includes(el)) {
        const token = new OperatorToken('operator', el, this.BINDINGPOWER[el], this.MATHFUNC[el]);
        tokens.push(token);
      }
    });
    return tokens;
  }
}
