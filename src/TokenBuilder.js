import OperationsRepository from './OperationsRepository';
import NumberReposytory from './NumberReposytory';
import FunctionReposytory from './FunctionReposytory';

export default class TokenBuilder {
  constructor(expression) {
    this.expression = expression;
    this.tokens = [];
    this.buffer = [];
    this.flagType = null;
    this.mapper = {
      number: (value) => NumberReposytory.getToken(value),
      letterals: (value) => FunctionReposytory.getToken(value),
    };
  }

  getValue() {
    return this.flagType === 'number' ? Number(this.buffer.join('')) : this.buffer.join('');
  }

  getToken(value) {
    return this.mapper[this.flagType](value);
  }

  getTokens() {
    const expressionWithoutSpace = this.expression.split('').filter((symbol) => symbol !== ' ');
    expressionWithoutSpace.forEach((el) => {
      if (NumberReposytory.isNumbers(el)) {
        this.flagType = 'number';
        this.buffer.push(el);
      } else if (FunctionReposytory.isLettarls(el)) {
        this.flagType = 'letterals';
        this.buffer.push(el);
      } else if (OperationsRepository.isOperator(el)) {
        if (this.buffer.length !== 0) {
          const value = this.getValue();
          const token = this.getToken(value);
          this.tokens.push(token);
          this.buffer = [];
        }
        const token = OperationsRepository.getToken(el);
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
