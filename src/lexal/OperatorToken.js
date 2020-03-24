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

  calculation(stack) {
    const countOfArguments = this.getCountArguments();
    if (countOfArguments === 2) {
      const b = stack.pop();
      const a = stack.pop();
      const func = this.getMathFunc();
      stack.push(func(a, b));
    } else if (countOfArguments === 1) {
      const a = stack.pop();
      const func = this.getMathFunc();
      this.stack.push(func(a));
    }
  }
}
