export default class Translator {
  constructor(tokens) {
    this.tokens = tokens;
    this.outputQueue = [];
    this.operationsStack = [];
  }

  translateToPostfixNotation() {
    this.tokens.forEach((token) => this.processedToken(token));
    this.operationsStack.reverse().forEach((operationToken) => {
      this.outputQueue.push(operationToken);
    });
    return this.outputQueue;
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
    if (token.getType() === 'openBracket') {
      this.operationsStack.push(token);
    }
    if (token.getType() === 'closedBracket') {
      let tokenTopOperationStack = this.getTokenTopStack();
      while (tokenTopOperationStack.getType() !== 'openBracket') {
        this.outputQueue.push(this.operationsStack.pop());
        if (this.outputOperationsStackIsEmpty()) {
          throw new Error('Пропущенна закрывающая скобка');
        }
        tokenTopOperationStack = this.getTokenTopStack();
      }
      // если найдена открытая скобка, выбрасываем её
      this.operationsStack.pop();
    }
    if (token.getType() === 'operator') {
      if (!this.outputOperationsStackIsEmpty()) {
        let tokenTopOperationStack = this.getTokenTopStack();
        while (tokenTopOperationStack.getBindingPower() >= token.getBindingPower()) {
          this.outputQueue.push(this.operationsStack.pop());
          if (this.outputOperationsStackIsEmpty()) {
            break;
          }
          tokenTopOperationStack = this.getTokenTopStack();
        }
      }
      this.operationsStack.push(token);
    }
  }
}
