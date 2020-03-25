import AbstractToken from './AbstractToken';

export default class NumberToken extends AbstractToken {
  constructor(type, value) {
    super(type);
    this.value = value;
  }

  calculate(stack) {
    stack.push(this.value);
  }


  processedTokenToPostfixNotation(args) {
    const [outputQueue] = args;
    outputQueue.push(this);
  }
}
