/* eslint class-methods-use-this:
["error", { "exceptMethods": ["calculate"] }] */
import OperatorToken from '../OperatorToken';

export default class OpenBracketToken extends OperatorToken {
  constructor(type) {
    super(type);
    this.bindingPower = 0;
  }

  processedTokenToPostfixNotation(args) {
    const [, operationsStack] = args;
    operationsStack.push(this);
  }

  calculate() {
    throw new Error('Проверьте выражение. Отсутствует закрывающая скобка');
  }
}
