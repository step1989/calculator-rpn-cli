import BinaryOperatorToken from './BinaryOperatorToken';

export default class SubtractionToken extends BinaryOperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 1;
    this.mathFunc = (a, b) => a - b;
  }

  calc(a, b) {
    return this.mathFunc(a, b);
  }
}
