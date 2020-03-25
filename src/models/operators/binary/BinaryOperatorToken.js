import OperatorToken from '../OperatorToken';

export default class BinaryOperatorToken extends OperatorToken {
  processedTokenToPostfixNotation(args) {
    const [outputQueue, operationsStack] = args;
    if (operationsStack.length !== 0) {
      let headToken = operationsStack[operationsStack.length - 1];
      while (headToken.getBindingPower() >= this.getBindingPower()) {
        outputQueue.push(operationsStack.pop());
        if (operationsStack.length === 0) {
          break;
        }
        headToken = operationsStack[operationsStack.length - 1];
      }
    }
    operationsStack.push(this);
  }

  calculate(stack) {
    const b = stack.pop();
    const a = stack.pop();
    stack.push(this.calc(a, b));
  }
}
