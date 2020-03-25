import OperatorToken from './OperatorToken';

export default class SubtractionToken extends OperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 1;
    this.countArguments = 2;
    this.mathFunc = (a, b) => a - b;
  }

  calc(a, b) {
    return this.mathFunc(a, b);
  }
}
