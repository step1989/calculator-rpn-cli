import Mapper from './Mapper';
import Character from './Character';
import NumberToken from './tokens/NumberToken';

export default class TokenBuilder {
  constructor(expression) {
    this.expression = expression;
    this.tokens = [];
    this.buffer = [];
    this.currentTypeInBuffer = null;
    this.mapper = {
      numbers: (value) => new NumberToken(value),
      letters: (value) => Mapper.getToken(value),
    };
  }

  bufferIsEmpty() {
    return this.buffer.length === 0;
  }

  getValue() {
    return this.currentTypeInBuffer === 'numbers' ? Number(this.buffer.join('')) : this.buffer.join('');
  }

  getToken(value) {
    return this.mapper[this.currentTypeInBuffer](value);
  }

  getTokens() {
    const expressionWithoutSpace = this.expression.split('').filter((symbol) => symbol !== ' ');
    expressionWithoutSpace.forEach((el) => {
      if (Character.isNumbers(el)) {
        this.currentTypeInBuffer = 'numbers';
        this.buffer.push(el);
      } else if (Character.isLetters(el)) {
        this.currentTypeInBuffer = 'letters';
        this.buffer.push(el);
      } else if (Character.isOperator(el)) {
        if (!this.bufferIsEmpty()) {
          const value = this.getValue();
          const token = this.getToken(value);
          this.tokens.push(token);
          this.buffer = [];
        }
        const token = Mapper.getToken(el);
        this.tokens.push(token);
      }
    });
    if (!this.bufferIsEmpty()) {
      const value = this.getValue();
      const token = this.getToken(value);
      this.tokens.push(token);
    }
    return this.tokens;
  }
}
