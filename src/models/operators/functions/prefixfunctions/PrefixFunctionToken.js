import OperatorToken from '../../OperatorToken';

export default class PrefixFunctionToken extends OperatorToken {
  constructor() {
    super();
    this.bindingPower = 10;
  }

  processedTokenToPostfixNotation(args) {
    const [, operationsStack] = args;
    operationsStack.push(this);
  }

  calculate(stack) {
    const a = stack.pop();
    stack.push(this.calc(a));
  }
}
