import BinaryOperatorToken from './BinaryOperatorToken';

export default class MultiplicationToken extends BinaryOperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 2;
    this.mathFunc = (a, b) => a * b;
  }

  calc(a, b) {
    return this.mathFunc(a, b);
  }
}
