import OperatorToken from '../OperatorToken';

export default class OpenBracketToken extends OperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 0;
  }

  processedTokenToPostfixNotation(args) {
    const [, operationsStack] = args;
    operationsStack.push(this);
  }
}
