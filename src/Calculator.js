import TokenBuilder from './TokenBuilder';
import Translator from './Translator';

export default class Calculator {
  constructor(expression) {
    this.expression = expression;
    this.stack = [];
  }

  calculate() {
    const tokenBuilder = new TokenBuilder(this.expression);
    const tokens = tokenBuilder.getTokens();
    const translator = new Translator(tokens);
    const tokensInPostfixNotation = translator.translateTokensToPostfixNotation();
    tokensInPostfixNotation.forEach((token) => {
      token.calculate(this.stack);
    });
    const [result] = this.stack;
    if (Number.isNaN(result)) {
      throw new Error('Проверьте выражение. Для одной из операций не хватает аргументов');
    }
    return parseFloat(result);
  }
}
