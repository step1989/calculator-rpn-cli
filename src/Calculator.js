import TokenBuilder from './TokenBuilder';
import Translator from './Translator';

export default class Calculator {
  constructor(expression) {
    this.expression = expression;
    this.stack = [];
  }

  calculate() {
    const tokens = TokenBuilder.getTokens(this.expression);
    const translator = new Translator(tokens);
    const tokensInPostfixNotation = translator.translateTokensToPostfixNotation();
    tokensInPostfixNotation.forEach((token) => {
      token.calculation(this.stack);
    });
    const [result] = this.stack;
    return parseFloat(result.toFixed(2));
  }
}
