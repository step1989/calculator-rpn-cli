import TokenBuilder from "./lexal/TokenBuilder";
import Translator from "./Translator";

export default class Calculator {
  constructor(expression) {
    this.expression = expression;
    this.stack = [];
  }

  processedToken(tokens) {
    tokens.forEach((token) => {
      if (token.getType() === 'number') {
        this.stack.push(token.getValue());
      }
      if (token.getType() === 'operator') {
        const b = this.stack.pop();
        const a = this.stack.pop();
        const func = token.getMathFunc();
        this.stack.push(func(a, b));
      }
    });
  }

  calculate() {
    const tokens = TokenBuilder.getTokens(this.expression);
    const tokensInPostfixNotation = new Translator(tokens).translateToPostfixNotation();
    this.processedToken(tokensInPostfixNotation);
    const [result] = this.stack;
    return result;
  }
}
