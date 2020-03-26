import AbstractToken from './AbstractToken';

export default class NumberToken extends AbstractToken {
  constructor(value) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  calculate(stack) {
    stack.push(this.getValue());
  }

  processedTokenToPostfixNotation(args) {
    const [outputQueue] = args;
    outputQueue.push(this);
  }
}
