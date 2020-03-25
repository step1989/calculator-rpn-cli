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
    console.log('this processed - ', this);
    console.log('outputQueue processed - ', outputQueue);
    console.log('operationsStack processed - ', operationsStack);
    if (operationsStack.length !== 0) {
      let headToken = operationsStack[operationsStack.length - 1];
      console.log('head processed  - ', headToken);

      while (headToken.getBindingPower() >= this.getBindingPower() && headToken.getType() !== 'openBracket') {
        console.log('попали в замену !!!');
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
