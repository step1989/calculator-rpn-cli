import OperationsMapper from './OperationsMapper';
import NumberReposytory from './NumberReposytory';
import FunctionsMapper from './FunctionsMapper';
import Character from './Character';

export default class TokenBuilder {
  constructor(expression) {
    this.expression = expression;
    this.tokens = [];
    this.buffer = [];
    this.flagType = null;
    this.mapper = {
      numbers: (value) => NumberReposytory.getToken(value),
      letterals: (value) => FunctionsMapper.getToken(value),
    };
  }

  getValue() {
    return this.flagType === 'numbers' ? Number(this.buffer.join('')) : this.buffer.join('');
  }

  getToken(value) {
    return this.mapper[this.flagType](value);
  }

  getTokens() {
    const expressionWithoutSpace = this.expression.split('').filter((symbol) => symbol !== ' ');
    expressionWithoutSpace.forEach((el) => {
      if (Character.isNumbers(el)) {
        this.flagType = 'numbers';
        this.buffer.push(el);
      } else if (Character.isLetters(el)) {
        this.flagType = 'letterals';
        this.buffer.push(el);
      } else if (Character.isOperator(el)) {
        if (this.buffer.length !== 0) {
          const value = this.getValue();
          const token = this.getToken(value);
          this.tokens.push(token);
          this.buffer = [];
        }
        const token = OperationsMapper.getToken(el);
        this.tokens.push(token);
      }
    });
    if (this.buffer.length !== 0) {
      const value = this.getValue();
      const token = this.getToken(value);
      this.tokens.push(token);
    }
    return this.tokens;
  }
}
