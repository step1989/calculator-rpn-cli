import OperatorToken from './OperatorToken';

export default class DivisionToken extends OperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 2;
    this.countArguments = 2;
    this.mathFunc = (a, b) => a / b;
  }

  calc(a, b) {
    return this.mathFunc(a, b);
  }
}
