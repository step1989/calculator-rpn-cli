export default class Translator {
  constructor(tokens) {
    this.tokens = tokens;
    this.outputQueue = [];
    this.operationsStack = [];
  }

  processedToken(token) {
    if (token.getType() === 'number') {
      this.outputQueue.push(token);
    }
    if (token.getType() === 'operator') {
      this.operationsStack.push(token);
    }
  }

  translateToPostfixNotation() {
    console.log(this.tokens);
    this.tokens.forEach((token) => this.processedToken(token));
    this.operationsStack.forEach((operationToken) => {
      this.outputQueue.push(operationToken);
    });
    return this.outputQueue;
  }
}
