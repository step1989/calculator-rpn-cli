export default class Translator {
  constructor(tokens) {
    this.tokens = tokens;
    this.outputQueue = [];
    this.operationsStack = [];
  }

  translateToPostfixNotation() {
    this.tokens.forEach((token) => {
      token.processedTokenToPostfixNotation([this.outputQueue, this.operationsStack]);
      console.log('Состояние стека и очереди вывода');
      console.log('toke - ', token);
      console.log('queue  - ', this.outputQueue);
      console.log('oper  - ', this.operationsStack);
      console.log('Конец вывода');
    });
    this.operationsStack.reverse().forEach((operationToken) => {
      this.outputQueue.push(operationToken);
    });
    return this.outputQueue;
  }
}
