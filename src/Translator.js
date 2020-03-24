export default class Translator {
  constructor(tokens) {
    this.tokens = tokens;
    this.outputQueue = [];
    this.operationsStack = [];
  }

  outputOperationsStackIsEmpty() {
    return this.operationsStack.length === 0;
  }

  getTokenTopStack() {
    const operationStackTopIndex = this.operationsStack.length - 1;
    return this.operationsStack[operationStackTopIndex];
  }

  processedToken(token) {
    if (token.getType() === 'number') {
      this.outputQueue.push(token);
    }
    if (token.getType() === 'operator') {
      if (!this.outputOperationsStackIsEmpty()) {
        let tokenTopOperationStack = this.getTokenTopStack();
        while (tokenTopOperationStack.getBindingPower() >= token.getBindingPower()) {
          this.outputQueue.push(tokenTopOperationStack);
          this.operationsStack = this.operationsStack.slice(this.operationsStack.length);
          if (this.outputOperationsStackIsEmpty()) {
            break;
          }
          tokenTopOperationStack = this.getTokenTopStack();
        }
      }
      this.operationsStack.push(token);
    }
  }

  translateToPostfixNotation() {
    this.tokens.forEach((token) => this.processedToken(token));
    this.operationsStack.reverse().forEach((operationToken) => {
      this.outputQueue.push(operationToken);
    });
    return this.outputQueue;
  }
}
