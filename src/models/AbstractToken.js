/* eslint class-methods-use-this:
["error", { "exceptMethods": ["processedTokenToPostfixNotation"] }] */
export default class AbstractToken {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  processedTokenToPostfixNotation() {
    throw new Error('Необходима реализация метода processedTokenToPostfixNotation');
  }
}
