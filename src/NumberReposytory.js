import NumberToken from './models/NumberToken';

export default class NumberReposytory {
  static NUMBERS = '0123456789.';

  static isNumbers = (el) => this.NUMBERS.includes(el);

  static getToken(value) {
    return new NumberToken(value);
  }
}
