/* eslint class-methods-use-this:
["error", { "exceptMethods": ["processedTokenToPostfixNotation"] }] */
import OperatorToken from './OperatorToken';

export default class ClosedBracketToken extends OperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 0;
  }

  processedTokenToPostfixNotation(args) {
    const [outputQueue, operationsStack] = args;
    let headToken = operationsStack.pop();
    while (headToken.getType() !== 'openBracket') {
      outputQueue.push(headToken);
      if (operationsStack.length === 0) {
        throw new Error('Пропущенна закрывающая скобка');
      }
      headToken = operationsStack.pop();
      // найденная открытая скобка будет выброшена из стека операций
    }
  }
}
