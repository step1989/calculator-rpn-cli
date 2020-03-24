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
      let headToken = this.operationsStack.pop();
      while (headToken.getType() !== 'openBracket') {
        this.outputQueue.push(headToken);
        if (this.outputOperationsStackIsEmpty()) {
          throw new Error('Пропущенна закрывающая скобка');
        }
        headToken = this.operationsStack.pop();
        // если найдена открытая скобка, выбрасываем её
      }
    }
    if (token.getType() === 'operator') {
      if (!this.outputOperationsStackIsEmpty()) {
        let headToken = this.getTokenTopStack();
        // let headToken = this.operationsStack.pop();
        while (headToken.getBindingPower() >= token.getBindingPower()) {
          this.outputQueue.push(this.operationsStack.pop());
          // this.outputQueue.push(headToken);
          if (this.outputOperationsStackIsEmpty()) {
            break;
          }
          headToken = this.getTokenTopStack();
          // headToken = this.operationsStack.pop();
        }
        // this.operationsStack.push(headToken);
      }
      this.operationsStack.push(token);
    }
  }
}
