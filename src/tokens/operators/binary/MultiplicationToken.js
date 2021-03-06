/* eslint class-methods-use-this:["error", { "exceptMethods": ["calc"] }] */
import BinaryOperatorToken from './BinaryOperatorToken';

export default class MultiplicationToken extends BinaryOperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 2;
  }

  calc(a, b) {
    return a * b;
  }
}
