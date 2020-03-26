import AbstractToken from '../../../AbstractToken';

export default class InfixFunctionToken extends AbstractToken {
  processedTokenToPostfixNotation(args) {
    const [outputQueue] = args;
    outputQueue.push(this);
  }
}
