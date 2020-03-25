/* eslint class-methods-use-this:
["error", { "exceptMethods": ["processedTokenToPostfixNotation"] }] */
import OperatorToken from '../OperatorToken';
import OpenBracketToken from './OpenBracketToken';

export default class ClosedBracketToken extends OperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 0;
  }

  processedTokenToPostfixNotation(args) {
    const [outputQueue, operationsStack] = args;
    let headToken = operationsStack.pop();
    while (!(headToken instanceof OpenBracketToken)) {
      outputQueue.push(headToken);
      if (operationsStack.length === 0) {
        throw new Error('Пропущена закрывающая скобка');
      }
      headToken = operationsStack.pop();
      // найденная открытая скобка будет выброшена из стека операций
    }
  }
}
