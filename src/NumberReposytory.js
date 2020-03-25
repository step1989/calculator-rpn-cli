import NumberToken from './models/NumberToken';

export default class NumberReposytory {
  static getToken(value) {
    return new NumberToken(value);
  }
}
