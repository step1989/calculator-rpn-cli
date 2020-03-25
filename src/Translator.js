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
    while (this.operationsStack.length !== 0) {
      const operation = this.operationsStack.pop();
      this.outputQueue.push(operation);
    }
    return this.outputQueue;
  }
}
