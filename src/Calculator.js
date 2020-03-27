export default class Calculator {
  constructor(tokens) {
    this.tokens = tokens;
    this.stack = [];
  }

  calculate() {
    this.tokens.forEach((token) => {
      token.calculate(this.stack);
    });
    const [result] = this.stack;
    if (Number.isNaN(result)) {
      throw new Error('Проверьте выражение. Для одной из операций не хватает аргументов');
    }
    return result;
  }
}
