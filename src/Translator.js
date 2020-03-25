export default class Translator {
  constructor(tokens) {
    this.tokens = tokens;
    this.outputQueue = [];
    this.operationsStack = [];
  }

  translateTokensToPostfixNotation() {
    this.tokens.forEach((token) => {
      token.processedTokenToPostfixNotation([this.outputQueue, this.operationsStack]);
    });
    this.operationsStack.reverse().forEach((operationToken) => {
      this.outputQueue.push(operationToken);
    });
    return this.outputQueue;
  }
}
