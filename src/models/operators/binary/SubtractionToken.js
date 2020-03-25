/* eslint class-methods-use-this:["error", { "exceptMethods": ["calc"] }] */
import BinaryOperatorToken from './BinaryOperatorToken';

export default class SubtractionToken extends BinaryOperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 1;
  }

  calc(a, b) {
    return a - b;
  }
}
