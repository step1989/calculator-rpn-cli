import AbstractToken from './AbstractToken';

export default class OperatorToken extends AbstractToken {
  constructor(type, value, bindingPower, mathFunc, countArguments) {
    super(type, value);
    this.bindingPower = bindingPower;
    this.mathFunc = mathFunc;
    this.countArguments = countArguments;
  }

  getBindingPower() {
    return this.bindingPower;
  }

  getMathFunc() {
    return this.mathFunc;
  }

  getCountArguments() {
    return this.countArguments;
  }
}
