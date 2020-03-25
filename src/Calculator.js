import TokenBuilder from './TokenBuilder';
import Translator from './Translator';

export default class Calculator {
  constructor(expression) {
    this.expression = expression;
    this.stack = [];
  }

  processedToken(tokens) {
    tokens.forEach((token) => {
      token.calculation(this.stack);
    });
  }

  calculate() {
    const tokens = TokenBuilder.getTokens(this.expression);
    const tokensInPostfixNotation = new Translator(tokens).translateToPostfixNotation();
    this.processedToken(tokensInPostfixNotation);
    const [result] = this.stack;
    return parseFloat(result.toFixed(2));
  }
}
