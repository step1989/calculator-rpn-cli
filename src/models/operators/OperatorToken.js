import AbstractToken from '../AbstractToken';

export default class OperatorToken extends AbstractToken {
  constructor(type) {
    super(type);
    this.bindingPower = null;
    this.countArguments = null;
  }

  getBindingPower() {
    return this.bindingPower;
  }

  processedTokenToPostfixNotation(args) {
    const [outputQueue, operationsStack] = args;
    if (operationsStack.length !== 0) {
      let headToken = operationsStack[operationsStack.length - 1];
      while (headToken.getBindingPower() >= this.getBindingPower() && headToken.getType() !== 'openBracket') {
        outputQueue.push(operationsStack.pop());
        if (operationsStack.length === 0) {
          break;
        }
        headToken = operationsStack[operationsStack.length - 1];
      }
    }
    operationsStack.push(this);
  }

  getCountArguments() {
    return this.countArguments;
  }

  calculation(stack) {
    const countOfArguments = this.getCountArguments();
    if (countOfArguments === 2) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(this.calc(a, b));
    } else if (countOfArguments === 1) {
      const a = stack.pop();
      this.stack.push(this.calc()(a));
    }
  }
}
