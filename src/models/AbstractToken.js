/* eslint class-methods-use-this:
["error", { "exceptMethods": ["processedTokenToPostfixNotation"] }] */
export default class AbstractToken {
  processedTokenToPostfixNotation() {
    throw new Error('Необходима реализация метода processedTokenToPostfixNotation');
  }
}
